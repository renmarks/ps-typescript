// @ts-nocheck
import { startAPI } from "./api";
import { Util } from "./converter";
import "./css/default.css";
import "./css/styles.css";

const form = document.getElementById("form");
const fromSelect = document.getElementById("from_currency") as HTMLInputElement | null;
const toSelect = document.getElementById("to_currency") as HTMLInputElement | null;
const fromAmount = document.getElementById("from_amount") as HTMLInputElement | null;
const toAmount = document.getElementById("to_amount") as HTMLParagraphElement | null;
const error = document.getElementById("error") as HTMLParagraphElement | null;
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

const currencyObjArray = Util.loadCurrencies();
function generateOptions() {
   const currencyArray = currencyObjArray.map((element) => [element.getCode(), element.getName()]);
   return Object.values(currencyArray)
     .map(([code, name]) => `<option value="${code}">${code} - ${name}</option>`)
     .join("");
 }

function populateOptions() {
  const optionsHTML = generateOptions(); 

  if (fromSelect && toSelect) {
    fromSelect.innerHTML = optionsHTML;
    toSelect.innerHTML = optionsHTML;
  }
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat(userLocale,
    { style: 'currency', currency: currency }).format(amount);
}

async function handleInput(e: any) {
 const from = fromSelect?.value;
  const to = toSelect?.value;
  const amountStr = fromAmount?.value;

  const amount = parseFloat(amountStr || "0" )
    if (amount == '') {
    toAmount.textContent = '0';
    error.textContent = 'You should enter an amount to convert';
   } else {
  const result = await Util.convertCurrency(from || "", to || "", amount)
  const value = result.getValue();
  toAmount.textContent = formatCurrency(value, to);
  error.textContent = result.getError();
   }
}

populateOptions();

form.addEventListener('input', handleInput)
startAPI();
