import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');


const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=fetchForexRates]');
const functionDeclaration1Text = functionDeclaration1.length == 1 ? functionDeclaration1[0].getText() : ''


describe('Call the fetch() method of the JavaScript Fetch API', () => {
it('Call the fetch() method of the JavaScript Fetch API, in the body of the fetchForexRates function & asign the resulting response to a constant named response. @fetchForexRates-method-impl', () => {
    expect(functionDeclaration1Text.includes('fetch(\`/api/forexrate/${base}\`)'), 'Have you called the fetch() method?').toBe(true)
    expect(functionDeclaration1Text.match('const response'), 'Have you set the result to a constant named `response`?').not.toBeNull()
})
})

describe('Convert the response to json', () => {
it('Convert the response to json data by calling the json() method on the response & asign the result to a constant named ratesByBase. @fetchForexRates-method-impl', () => {
    expect(functionDeclaration1Text.match('response.json()'), 'Have you converted the response to json?').not.toBeNull()
    expect(functionDeclaration1Text.match('const ratesByBase'), 'Have you set teh result to a constant named `ratesByBase`?').not.toBeNull()
})
})

describe('Return ratesByBase from the function', () => {
it('Return ratesByBase from the function. @fetchForexRates-method-impl', () => {
    expect(functionDeclaration1Text.match('return ratesByBase'), 'Have you returned `ratesByBase` from the function?').not.toBeNull()
})
})
