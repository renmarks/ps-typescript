"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function retry(retryOptions) {
    return function (target, context) {
        console.log('Applying retry decorator');
        const resultMethod = async function (...args) {
            console.log('@retry - Running the retry decorator');
            let lastError = undefined;
            for (let attemptNum = 1; attemptNum <= retryOptions.maxRetryAttempts; attemptNum++) {
                try {
                    console.log(`Retry - attempt # ${attemptNum}`);
                    return await target.apply(this, args);
                }
                catch (error) {
                    lastError = error;
                    if (attemptNum < retryOptions.maxRetryAttempts) {
                        console.log('@retry - Retrying...');
                        await sleep(retryOptions.delayMs);
                    }
                }
            }
            throw lastError;
        };
        return resultMethod;
    };
}
function logAndretry(target, context) {
    const retryDecorator = retry({ maxRetryAttempts: 4, delayMs: 2000, });
    const targetWithRetries = retryDecorator(target, context);
    return log(targetWithRetries, context);
}
function log(target, context) {
    const resultMethod = async function (...args) {
        console.log(`@log - Running the ${context.name.toString()} method`);
        try {
            return await target.apply(this, args);
        }
        finally {
            console.log(`@log - Method ${context.name.toString()} finished`);
        }
    };
    return resultMethod;
}
class Metric {
    name;
    constructor(name) {
        this.name = name;
    }
    // Method returning a dector
    time() {
        const metricThis = this;
        return function (target, context) {
            //new method that captures time metric
            const resultMethod = async function (...args) {
                const start = Date.now();
                try {
                    return await target.apply(this, args);
                }
                finally {
                    const end = Date.now();
                    const timeMs = end - start;
                    console.log(`@time - Metric ${metricThis.name} value ${timeMs} ms to execute`);
                }
            };
            return resultMethod;
        };
    }
}
function createMetric(name) {
    return new Metric(name);
}
const weatherTiming = createMetric('weatherTiming');
let WeatherAPI = (() => {
    let _instanceExtraInitializers = [];
    let _getWeather_decorators;
    return class WeatherAPI {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getWeather_decorators = [weatherTiming.time(), logAndretry];
            __esDecorate(this, null, _getWeather_decorators, { kind: "method", name: "getWeather", static: false, private: false, access: { has: obj => "getWeather" in obj, get: obj => obj.getWeather }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        apiVersion = (__runInitializers(this, _instanceExtraInitializers), 'v1');
        async getWeather(city) {
            console.log(`Fetching weather data for ${city} using API version ${this.apiVersion}`);
            if (Math.random() < 0.75)
                throw new Error('Something went wrong');
            return {
                apiVersion: this.apiVersion,
                city: city,
                temperature: 20,
                humidity: 80
            };
        }
    };
})();
async function main() {
    const weatherAPI = new WeatherAPI();
    console.log(await weatherAPI.getWeather('New York'));
    console.log(await weatherAPI.getWeather('Los Angeles'));
}
main().catch(console.error);
