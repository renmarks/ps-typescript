import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');


const ast1 = ast(source);

const currencyClassNodes = query(ast1, 'ClassDeclaration[name.name="Currency"]');
const currencyClassConstructorNodes = query(ast1, 'ClassDeclaration[name.name="Currency"] > Constructor');


const currencyClassNodeText = currencyClassNodes.length == 1 ? currencyClassNodes[0].getText(): ''
const currencyClassConstructorNodeText = currencyClassConstructorNodes.length == 1 ? currencyClassConstructorNodes[0].getText(): ''

describe('Declare a Class named Currency', () => {

it('Class with name `Currency` declared. @Setup-Currency-class', () => {
  expect(currencyClassNodes.length == 1, 'Have you declared a class with name `Currency`?').toBe(true)
})
})

describe('Declare a property named `code` in `Currency` class', () => {
it('A property with a name `code` is declared in `Currency` class. @Setup-Currency-class', () => {
  expect(currencyClassNodeText.match('private code: string;'), 'Have you declared a property with a name `code` in `Currency` class?').not.toBeNull()
})
})

describe('Declare a property named `name` in `Currency` class', () => {
it('A property with a name `name` is declared in `Currency` class. @Setup-Currency-class', () => {
  expect(currencyClassNodeText.match('private name: string;'), 'Have you declared a property with a name `name` in `Currency` class').not.toBeNull()
})
})

describe('Define a constructor in `Currency` class', () => {
it('A constructor is defined to initilaze the 2 properties in `Currency` class. @Setup-Currency-class', () => {
  expect(currencyClassConstructorNodes.length == 1, 'Have you defined a constructor for the `Currency` class?').toBe(true)
  expect(currencyClassConstructorNodeText.match('code: string, name: string'), 'Have you initialized  the 2 properties in the constructor?').not.toBeNull()
  expect(currencyClassConstructorNodeText.includes('this.code = code;') && 
        currencyClassConstructorNodeText.includes(' this.name = name;'), 'Have you initialized  the 2 properties in the constructor?').toBe(true)
})
})

describe('Define a getter as getCode() in `Currency` class', () => {
it('A getter is defind as getCode() in `Currency` class. @Setup-Currency-class', () => {
  expect(currencyClassNodeText.match('getCode()'),'Have you defined a getter as getCode() in the `Currency` class?').not.toBeNull()
})
})

describe('Define a getter as getName() in `Currency` class', () => {
it('A getter is defind as getName() in `Currency` class. @Setup-Currency-class', () => {
  expect(currencyClassNodeText.match('getName()'), 'Have you defined a getter as getName() in the `Currency` class?').not.toBeNull()
})
})
