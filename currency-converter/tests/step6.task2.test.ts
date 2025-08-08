import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source1 = fs.readFileSync('src/converter.ts', 'utf8');
const source2 = fs.readFileSync('src/main.ts', 'utf8');


const ast1 = ast(source1);
const ast2 = ast(source2);

const utilClassNodes = query(ast1, 'ClassDeclaration[name.name="Util"]');
const utilClassNodesText = utilClassNodes.length == 1 ? utilClassNodes[0].getText() : ''

const method = utilClassNodesText.slice(utilClassNodesText.indexOf('static async convertCurrency'),utilClassNodesText.indexOf('}}'));
 
const functionDeclaration1 = query(ast2, 'FunctionDeclaration[name.name=handleInput]');
const functionDeclaration1NodeText = functionDeclaration1[0].getText();

describe('Error handling in the convertCurrency() method of the Util class', () => {
it('In the convertCurrency() method of the Util class, check if the result of the fetchForexRates() function call is an instance of an Error object using the instanceof operator. @Error-handling-convertCurrency', () => {
    expect(method.includes('if'), 'Have you checked a condition?').toBe(true)
    expect(method.includes('result instanceof Error'), 'Have you checked if the result of the fetchForexRates() function call is an instance of an `Error` object using the instanceof operator?').toBe(true)
    expect(method.includes('return new Result(result.message + ": could not retrieve exchange rate data.")'), 'Have you returned a new Result object with the correct error message set to it?').toBe(true)
   
})
})

describe('Implement the normal flow of the convertCurrency() method', () => {
it('In th else block, return the usual result i.e. Util.result. @Error-handling-convertCurrency', () => {
    const elseBlock = method.slice(method.indexOf('else'), method.indexOf('return Util.result;}')) 
    expect(elseBlock.includes('return Util.result'), 'Have you returned the usual result in the else block?').toBe(true)
})
})

describe('Populate error message in the UI', () => {
it('Get the error message from the result object and set it to the paragraph element error in the handleInput(). @Error-handling-convertCurrency', () => {
    expect(functionDeclaration1NodeText.includes('error.textContent = result.getError()'), 'Have you got the error message  from the result object and set it to the paragraph element `error` in the handleInput() function?').toBe(true)
})
})
