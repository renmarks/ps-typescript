import { ast, query } from '@phenomnomnominal/tsquery';
import { test, expect, describe, it } from 'vitest'

import fs from 'fs';
const source = fs.readFileSync('src/main.ts', 'utf8');

const ast1 = ast(source);

describe('Bind handling logic to the event listener', () => {
it('Bind handling logic to the event listner. @Bind-event-listener', () => {
    expect(ast1.getText().includes("form.addEventListener('input', handleInput)") ||
        ast1.getText().includes("form.addEventListener(\"input\", handleInput)"),
        'Have you called the addEventListener() on the form passing `input` and `handleInput` as arguments?').toBe(true)
   
})
})
