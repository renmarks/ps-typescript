import { ast, query, match } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'
import { Util  } from '../src/converter';

import fs from 'fs';
const source = fs.readFileSync('src/main.ts', 'utf8');

const ast1 = ast(source);

const functionDeclaration1 = query(ast1, 'FunctionDeclaration[name.name=populateOptions]');

describe('Call the generateOptions() function', () => {
it('Call the generateOptions() function and assign the result to a variable named optionsHTML. @generateOptions-method', () => {
    expect(functionDeclaration1[0].getText().includes('optionsHTML = generateOptions()'), 'Have you called the generateOptions() function and assigned the result to a variable named optionsHTML?').toBe(true)
})
})

describe('Set the values in optionsHTML', () => {
it('Use the innerHTML property of the HTMLInputElement fromSelect to set the values in optionsHTML. @generateOptions-method', () => {
    expect(functionDeclaration1[0].getText().includes('fromSelect.innerHTML = optionsHTML'),
            'Have you used the innerHTML property of the HTMLInputElement fromSelect to set the values in optionsHTML?').toBe(true)
})
})

describe('Set the values in optionsHTML', () => {
it('Use the innerHTML property of the HTMLInputElement toSelect to set the values in optionsHTML. @generateOptions-method', () => {
    expect(functionDeclaration1[0].getText().includes('toSelect.innerHTML = optionsHTML'),
            'Have you used the innerHTML property of the HTMLInputElement toSelect to set the values in optionsHTML?').toBe(true)
})
})
