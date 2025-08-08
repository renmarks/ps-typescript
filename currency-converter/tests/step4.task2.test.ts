import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');


const ast1 = ast(source);

const utilClassNodes = query(ast1, 'ClassDeclaration[name.name="Util"]');

describe('Read the result json arry from the fetchForexRates() call', () => {
it('In the convertCurrency() mthod of the Util class, read the result json array returned from the fetchForexRates() function call to obtain the rate for the `to` currency. @fetchForexRates-read-result', () => {
    expect(utilClassNodes[0].getText().includes('result[0].rates[to]'), 'Have you read the result json array to obtain the rate for the `to` currency?').toBe(true)
    expect(utilClassNodes[0].getText().includes('const rate'), 'Have you assigned the obtained rate to a constant named `rate`?').toBe(true)
})
})
