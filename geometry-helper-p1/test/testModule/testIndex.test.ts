import * as fs from 'fs';

describe('index.ts', () => {
  test('should have correct export statements', () => {
    const fileContent = fs.readFileSync('./src/index.ts', 'utf-8').trim();

    const expectedContent1 = `import { RoundShape } from "./RoundShape"`;
    const expectedContent2 = `import { SquareShape } from "./SquareShape"`;
    const expectedContent3 = `export { RoundShape, SquareShape }`;
    const expectedContent4 = `export { SquareShape, RoundShape }`;

    expect(fileContent).toContain(expectedContent1);
    expect(fileContent).toContain(expectedContent2);
    expect(fileContent).toContain(expectedContent3 || expectedContent4);
  });
});
