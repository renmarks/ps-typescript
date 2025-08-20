import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/main.ts', 'utf8');


const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=handleInput]');

describe('Check the amount in the handleInput() function', () => {                
it('In the handleInput() function, check if the amount is empty. @Error-handling-handleInput', () => {
    expect(functionDeclaration1[0].getText().includes('if'), 'Have you used an `if` block?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('amount == \'\'') ||
            functionDeclaration1[0].getText().includes('amount == ""'), 'Have you checked if the `amount` is blank?').toBe(true)
})
})

describe('Set the paragraph element with the error message', () => { 
it('Set the paragraph element error with the error message. @Error-handling-handleInput', () => {
    expect(functionDeclaration1[0].getText().slice(functionDeclaration1[0].getText().indexOf('if'))
                .includes('error.textContent = \'You should enter an amount to convert\''), 'Have you set the paragraph element with the error message?').toBe(true)
   
})
})

describe('Set the paragraph element toAmount with a value of 0', () => { 
it('Set the paragraph element toAmount with a value of 0. @Error-handling-handleInput', () => {
    expect(functionDeclaration1[0].getText().slice(functionDeclaration1[0].getText().indexOf('if'))
                .includes('toAmount.textContent = \'0\''), 'Have you set the `toAmount` paragraph element with a value of \'0\'?').toBe(true)
   
})
})

describe('Place the usual logic in the else block', () => { 
it('Place the usual logic in the else block. @Error-handling-handleInput', () => {
    expect(functionDeclaration1[0].getText().includes('else'), 'Have you placed the usual logic in the else block?').toBe(true)
})
})
