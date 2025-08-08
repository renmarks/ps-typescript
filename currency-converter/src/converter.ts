let currenciesJson = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "Pound Sterling",
  SGD: "Singapore Dollar",
};

// Define the Currency class here
export class Currency {
  private code: string;
  private name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  public getCode(): string {
    return this.code;
  }

  public getName(): string {
    return this.name;
  }
    public getText(): string {
    return `${this.code} - ${this.name}`;
  }
}


// Define the Result class here
export class Result {
  private value: number = 0;
  private error: string = "";

  constructor(a?: number | string) {
    if (typeof a === "number") {
      this.value = a!;
    } else if (typeof a === "string") {
      this.error = a!;
    }
  }
  public getValue(): number {
    return this.value;
  }

  public getError(): string {
    return this.error;
  }
} 

export class Util {
  private static currencies: Currency[] = [];
  private static result: Result;

  static loadCurrencies(): Currency[] {
    Util.currencies = [];

    for (const [code, name] of Object.entries(currenciesJson)) {
      Util.currencies.push(new Currency(code, name));
    }

    return Util.currencies;
  }

 static async convertCurrency(from: string, to: string, amount: number): Promise<Result> {
    const result = await fetchForexRates(from);
    
    if (result instanceof Error) {
        return new Result(result.message + ': could not retrieve exchange rate data.');
    }

    const rate = result[0].rates[to];
    const convert = amount * rate;
    Util.result = new Result(convert);
    return Util.result;
}
}

export async function fetchForexRates(base: string) {
  try { 
    const response = await fetch(`/api/forexrate/${base}`);

    if (!response.ok) {
      throw new Error(`Error response with status: ${response.status}`);
    }

    const ratesByBase = await response.json();
    return [ratesByBase];
  } catch (error) {
    return error;
  }
}
