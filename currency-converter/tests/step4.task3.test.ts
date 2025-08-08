import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');


const ast1 = ast(source);

const utilClassNodes = query(ast1, 'ClassDeclaration[name.name="Util"]');

describe('Perform the conversion', () => {
it('Perform the conversion using the exchange rate for the given amount and assign the resulting value to a constant named convertedAmount.  @Conversion', () => {
    expect(utilClassNodes[0].getText().includes('rate * amount'), 'Have you multiplied the rate by the amount?').toBe(true)
    expect(utilClassNodes[0].getText().includes('const convertedAmount'), 'Have you assigned the result to a constant named `convertedAmount`?').toBe(true)
})
})

describe('Create a new Result object for the converted amount', () => {
it('Create a new Result object passing convertedAmount to the constructor and assign it to Util.result. @Conversion', () => {
    expect(utilClassNodes[0].getText().includes('Util.result = new Result(convertedAmount)'), 'Have you created a new Result object passing convertedAmount to the constructor and assigned it to Util.result?').toBe(true)
})
})
