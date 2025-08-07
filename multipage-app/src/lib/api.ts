import * as data from "../../db.json";

export const getConversionRate = (currency: string) => {
  const currencies = data.currencies;
  console.log(`finding conversion rate for ${currency}`);

  /* Task 4.1: Calculate exchange rate */
  const currencyObj = currencies.find(c => c.id.toLowerCase() === currency.toLowerCase());
  return currencyObj ? currencyObj.conversion : 1;
};
