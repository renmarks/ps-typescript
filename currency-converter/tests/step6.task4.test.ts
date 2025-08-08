import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/main.ts', 'utf8');


const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=formatCurrency]');
const functionDeclaration2 = query(ast1, 'FunctionDeclaration[name.name=handleInput]');

console.log(functionDeclaration1[0].getText());
                
describe('Implement the formatCurrency() function', () => {  
it('Implement the formatCurrency() function to create and return a new NumberFormat instance, passing the userLocale and an option json object. @Formatting-values', () => {
    expect(functionDeclaration1[0].getText().includes('return new Intl.NumberFormat'), 'Have you created and returned a new Intl.NumberFormat instance?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('userLocale'), 'Have you passed `userLocale` as the 1st argument to the constructor?').toBe(true)
    expect(functionDeclaration1[0].getText().includes('{ style: \'currency\', currency: currency }'), 'Have you passed the options object as the 2nd argument to the constructor?').toBe(true)
})
})

describe('Call the format() instance method on the NumberFormat instance', () => { 
it('Call the format() instance method on the created NumberFormat instance to format the passed in amount. @Formatting-values', () => {
    expect(functionDeclaration1[0].getText().includes('.format(amount)'), 'Have you called the format() method on the NumberFormat instance?').toBe(true)
})
})


describe('Use the formatCurrency() function in the handleInput() function', () => { 
it('In the handleInput() function use the formatCurrency() function to format the result value of the conversion in the to currency before setting it to the toAmount paragraph element. @Formatting-values', () => {
    expect(functionDeclaration2[0].getText().includes('toAmount.textContent = formatCurrency(value, to)'), 'Have you called the formatCurrency() function in the handleInput() function & set the `toAmount` element?').toBe(true)
})
})
