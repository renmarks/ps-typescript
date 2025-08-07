import { getConversionRate } from '../../lib/api';

describe('Currency Conversion', () => {
    it('should calculate the correct conversion rate', async () => {
        const usd = getConversionRate('usd');
        expect(usd).toEqual(1);

        const cad = getConversionRate('cad');
        expect(cad).toEqual(0.73);

        const nzd = getConversionRate('nzd');
        expect(nzd).toEqual(0.61);
    });
});
