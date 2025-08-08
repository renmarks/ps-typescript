import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');


const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=fetchForexRates]');
const functionDeclaration1Text = functionDeclaration1.length == 1 ? functionDeclaration1[0].getText() : ''
const catchBlock = functionDeclaration1Text.slice(functionDeclaration1Text.indexOf('catch'));

describe('Error handling in the fetchForexRates() function', () => {
it('In fetchForexRates() function, sorround the external API call for fetching exchange rates with a try - catch block. @Error-handling-fetchForexRates', () => {
    expect(functionDeclaration1Text.includes('try'),'Have you enclosed the API call with a try block?').toBe(true)
    expect(functionDeclaration1Text.includes('catch'), 'Have you added a catch block for the try block?').toBe(true)
    expect(catchBlock.includes('return'), 'Have you returned the error in the catch block?').toBe(true)
   
})
})
