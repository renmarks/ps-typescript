import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe,it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/main.ts', 'utf8');

const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=handleInput]');

describe('Read values in the handleInput() function', () => {
it('In the handleInput() function read the values of fromSelect, toSelect & fromAmount HTML input elements. @Bind-UI-to-logic', () => {
    expect(functionDeclaration1[0].getText().includes('fromSelect.value'), 'Have you read the value of fromSelect?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('toSelect.value'),'Have you read the value of toSelect?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('fromAmount.value'), 'Have you read the value of fromAmount?').toBe(true)
})
})

describe('Call the asynchronous convertCurrency() method', () => {
it('Call the asynchronous convertCurrency() method of the Util class. @Bind-UI-to-logic', () => {
    expect(functionDeclaration1[0].getText().includes('await Util.convertCurrency'), 'Have you called the convertCurrency() method of the Util class?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('parseFloat'), 'Have you parsed `fromAmount` to a Float?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('const result'), 'Have you assigned the result to a constant named `result`?').toBe(true)
    
})
})
