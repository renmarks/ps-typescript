import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');


const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=fetchForexRates]');

describe('Define an asynchronous function named fetchForexRates', () => {
it('Define an asynchronous function named fetchForexRates that takes in a string type parameter named base to represent the base currency. @fetchForexRates-functiondef', () => {
    expect(functionDeclaration1.length == 1,'Have you defined a function named fetchForexRates?').toBe(true)
    expect(functionDeclaration1[0].getText().match('async '), 'Is your function defined with the `async` keyword?').not.toBeNull()
    expect(functionDeclaration1[0].getText().match('base: string'), 'Does your function take a string type parameter `base`?').not.toBeNull()
})
})
