import * as fs from 'fs';

describe('app.ts', () => {
  test('should have import statement at the top', () => {
    const fileContent = fs.readFileSync('app.ts', 'utf-8');
    const importStatementRegex = /^import\s*{\s*(RoundShape|SquareShape)\s*,\s*(RoundShape|SquareShape)\s*}\s*from\s*['"]\.\/src\/index['"];/m;
    expect(importStatementRegex.test(fileContent)).toBe(true);
  });
});
