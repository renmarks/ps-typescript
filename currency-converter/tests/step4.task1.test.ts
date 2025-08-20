import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');


const ast1 = ast(source);

const utilClassNodes = query(ast1, 'ClassDeclaration[name.name="Util"]');

describe('Call the fetchForexRates() function', () => {
it('Call the fetchForexRates() function to fetch exchange rates data inside the convertCurrency method of the Util class. @fetchForexRates-functioncall', () => {
    expect(utilClassNodes[0].getText().includes('await fetchForexRates(from)'), 'Have you called the fetchForexRates() function?').toBe(true)
    expect(utilClassNodes[0].getText().includes('const result'),'Have you assigned the result to a constant named `result`?').toBe(true)
})
})
