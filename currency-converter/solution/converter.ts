let currenciesJson = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "Pound Sterling",
  SGD: "Singapore Dollar",
};

class Currency {
  private code: string;
  private name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  public getCode() {
    return this.code;
  }

  public getName() {
    return this.name;
  }
}

class Result {
  private value: number = 0;
  private error: string = "";

  constructor(a?: number | string) {
    if (typeof a === "number") {
      this.value = a!;
    } else if (typeof a === "string") {
      this.error = a!;
    }
  }

  public getValue() {
    return this.value;
  }

  public getError() {
    return this.error;
  }
}

export class Util {
  private static currencies: Currency[] = [];
  private static result: Result;

  static loadCurrencies(): Currency[] {
    for (let obj of Object.entries(currenciesJson)) {
      Util.currencies.push(new Currency(obj[0], obj[1]));
    }
    return Util.currencies;
  }

  static async convertCurrency(from: string, to: string, amount: number): Promise<Result> {
    const result = await fetchForexRates(from);
    if (result instanceof Error) {
      return new Result(result.message + ": could not retrieve exchange rate data.");
    } else {
      const rate = result[0].rates[to];
      const convertedAmount = rate * amount;

      Util.result = new Result(convertedAmount);
      return Util.result;
    }
  }
}

async function fetchForexRates(base: string) {
  try {
    const response = await fetch(`/api/forexrate/${base}`);
    if (!response.ok) {
      throw new Error(`Error response with status: ${response.status}`);
    }
    const ratesByBase = await response.json();
    return ratesByBase;
  } catch (error) {
    return error;
  }
}