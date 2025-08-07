type CurrenciesProps = {
  currency: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rate?: number;
};
export const Currencies = ({
  currency,
  handleInputChange,
  rate,
}: CurrenciesProps) => {
  return (
    <div>
      <label className="flex gap-2 items-center">
        <span className="font-bold" data-testid="currencies">Currency</span>
        <br />
        <label>
          <input
            type="radio"
            name="currency"
            value="USD"
            checked={currency === "USD"}
            onChange={handleInputChange}
            className="mx-2"
            data-testid="currency"
          />
          USD
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="currency"
            value="CAD"
            checked={currency === "CAD"}
            onChange={handleInputChange}
            className="mx-2"
            data-testid="currency_cad"
          />
          CAD
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="currency"
            value="NZD"
            checked={currency === "NZD"}
            onChange={handleInputChange}
            className="mx-2"
            data-testid="currency_nzd"
          />
          NZD
        </label>
        {rate && (
          <div className="pl-3 text-xs font-light" data-testid="currency-conversion-label">
            <p>
              (1 {currency} = {rate} USD)
            </p>
          </div>
        )}
      </label>
    </div>
  );
};
