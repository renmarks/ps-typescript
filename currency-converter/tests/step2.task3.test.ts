import { ast, query, match } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'
import { Util  } from '../src/converter';

import fs from 'fs';
const source = fs.readFileSync('src/main.ts', 'utf8');

const ast1 = ast(source);

const currencyObjArrayVar = query(ast1, 'VariableDeclaration[name.name=currencyObjArray]');

describe('Implement the loadCurrencies() method', () => {
it('implement the loadCurrencies() method to read the currenciesJson object and push them to the currencies array property of the Util class. @loadCurrencies-method', () => {
    expect(Util.loadCurrencies().length, 'Have you implemented the loadCurrencies() method to read the currenciesJson object and push them to the currencies array property of the Util class?').not.toBe(0)
})
})

describe('Call the loadCurrencies() method', () => {
it('Call the loadCurrencies() method to retrieve the Currency array & assign the resulting value to the currency ObjArray. @loadCurrencies-method', () => {
    expect(currencyObjArrayVar[0].getText(), 'Have you called the loadCurrencies() method to retrieve the Currency array & assign the resulting value to the currency ObjArray?').not.toEqual('currencyObjArray = null')
})
})
