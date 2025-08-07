import * as data from "../../db.json";

export const getConversionRate = (currency: string) => {
  const currencies = data.currencies;
  console.log(`finding conversion rate for ${currency}`);

  /* Task 4.1: Calculate exchange rate */
  const result = currencies.filter((c) => c.id === currency.toLowerCase());
  return result[0].conversion;
};
