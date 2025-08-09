
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

type RetryOptions = {
    maxRetryAttempts: number;
    delayMs: number;
}
function retry<This, Args extends any[], Return>(retryOptions: RetryOptions) {
 return function (
    target: (this: This, ...args: Args) => Promise<Return>, 
    context:  ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Promise<Return>
    >,
 ): (this: This, ...args: Args) => Promise<Return> {
    console.log('Applying retry decorator');
    const resultMethod = async function (this: any, ...args: Args) {
    console.log('@retry - Running the retry decorator')
    let lastError = undefined;
        for (let attemptNum = 1; attemptNum <= retryOptions.maxRetryAttempts; attemptNum++) {
            try {
                console.log(`Retry - attempt # ${attemptNum}`);
                return await target.apply(this, args);
            } catch (error) {
                lastError = error;
                if (attemptNum < retryOptions.maxRetryAttempts) {
                    console.log('@retry - Retrying...');
                    await sleep(retryOptions.delayMs);
                }
            }
        }
        throw lastError;

    }
    return resultMethod

}
}
function logAndretry<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Promise<Return>, 
    context:  ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Promise<Return>
    >,
 ): (this: This, ...args: Args) => Promise<Return> {
    const retryDecorator = retry<This, Args, Return>({maxRetryAttempts: 4, delayMs: 2000,});
    const targetWithRetries = retryDecorator(target, context);
    return log(targetWithRetries, context);
}

function log <This, Args extends any [], Return>(
    target: (this: This, ...args: Args) => Promise<Return>, 
    context:  ClassMethodDecoratorContext<
        This,
        (this: This, ...args: Args) => Promise<Return>
    >,
    ): (this: This, ...args: Args) => Promise<Return> {
    const resultMethod = async function (this: any, ...args: Args) {
        console.log(`@log - Running the ${context.name.toString()} method`);
        try {
            return await target.apply(this, args);
        } finally {
            console.log(`@log - Method ${context.name.toString()} finished`);
        }
    }
    return resultMethod
}

class Metric {
    constructor(public name: string) {}
    // Method returning a dector
    time() {
        const metricThis = this;
        return function (target: any, context: any) {
            //new method that captures time metric
            const resultMethod = async function (this: any, ...args: any[]) {
                const start = Date.now();
                try {
                    return await target.apply(this, args);
                } finally {
                    const end = Date.now();
                    const timeMs = end - start;
                    console.log(`@time - Metric ${metricThis.name} value ${timeMs} ms to execute`);
                }
            }
            return resultMethod;
        }
    }
}

function createMetric(name: string) {
    return new Metric(name);
}
const weatherTiming = createMetric('weatherTiming');

class WeatherAPI {
    apiVersion: string = 'v1';
    @weatherTiming.time()
    @logAndretry
    async getWeather(city: string) {
        console.log(`Fetching weather data for ${city} using API version ${this.apiVersion}`);
        if (Math.random() < 0.75) throw new Error('Something went wrong') 
        return {
            apiVersion: this.apiVersion,
            city: city,
            temperature: 20,
            humidity: 80
        }
    }
}

async function main() {
    const weatherAPI = new WeatherAPI();
    console.log(await weatherAPI.getWeather('New York'));
    console.log(await weatherAPI.getWeather('Los Angeles'));
}

main().catch(console.error);