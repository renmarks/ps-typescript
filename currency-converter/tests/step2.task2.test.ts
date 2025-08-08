import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/converter.ts', 'utf8');

const ast1 = ast(source);

const resultClassNodes = query(ast1, 'ClassDeclaration[name.name="Result"]');
const resultClassConstructorNodes = query(ast1, 'ClassDeclaration[name.name="Result"] > Constructor');

const resultClassNodeText = resultClassNodes.length == 1 ? resultClassNodes[0].getText() : ''
const resultClassConstructorNodeText = resultClassConstructorNodes.length == 1 ? resultClassConstructorNodes[0].getText() : ''

describe('Declare a Class named `Result`', () => {
it('Class with name `Result` declared. @Setup-Result-class', () => {
  expect(resultClassNodes.length == 1, 'Have you declared a Class with name `Result`?').toBe(true)
})
})

describe('Declare A property with a name `value` in `Result` class', () => {
it('A property with a name `value` is declared in `Result` class. @Setup-Result-class', () => {
  expect(resultClassNodeText.match('private value: number = 0'), 'Have you declared a property with a name `value` in `Result` class?').not.toBeNull()
})
})

describe('Declare a property with a name `error` in `Result` class', () => {
it('A property with a name `error` is declared in `Result` class. @Setup-Result-class', () => {
  expect(resultClassNodeText.match('private error: string = ""') ||
          resultClassNodeText.match('private error: string = \'\''), 'Have you declared a property with a name `error` in `Result` class?').not.toBeNull()
})
})

describe('Declare a constructor in `Result` class', () => {
it('A constructor with a single parameter that can initialize the 2 properties conditionally is declared in `Result` class. @Setup-Result-class', () => {
  expect(resultClassConstructorNodes.length == 1, 'Have you declared a constructor in `Result` class?').toBe(true)
  expect(resultClassConstructorNodeText.match('a?: number | string'), 'Does your constructor initialize the 2 properties conditionally?').not.toBeNull()
  expect(resultClassConstructorNodeText.match('if'), 'Does your constructor initialize the 2 properties conditionally?').not.toBeNull()
  expect(resultClassConstructorNodeText.match('else if'), 'Does your constructor initialize the 2 properties conditionally?').not.toBeNull()

})
})

describe('Declare a getter as getValue() in `Result` class', () => {
it('A getter is defind as getValue() in `Result` class. @Setup-Result-class', () => {
  expect(resultClassNodeText.match('getValue()'), 'Have you defined a getter as getValue()?').not.toBeNull()
})
})

describe('Delare a getter as getError() in `Result` class', () => {
it('A getter is defind as getError() in `Result` class. @Setup-Result-class', () => {
  expect(resultClassNodeText.match('getError()'), 'Have you defined a getter as getError()?').not.toBeNull()
})
})
