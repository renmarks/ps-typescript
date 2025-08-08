import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/main.ts', 'utf8');

const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=handleInput]');

describe('Access the value property of the result', () => {
it('Access the value property of the result (Result object) by calling the getter (getValue()) and assign the value to a constant named value. @Setting-toAmount', () => {
    expect(functionDeclaration1[0].getText().includes('result.getValue()'), 'Have you called the getValue() method?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('const value'), 'Have you assigned the result to a constant named `value`?').toBe(true)
})
})

describe('Set the value to the toAmount paragraph element', () => {
it('Set the value to the toAmount paragraph element. @Setting-toAmount', () => {
    expect(functionDeclaration1[0].getText().includes('toAmount.textContent = value'), 'Have you set the toAmount element with the value?').toBe(true)
})
})
