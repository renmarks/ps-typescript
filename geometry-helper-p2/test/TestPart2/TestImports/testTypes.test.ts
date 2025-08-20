import * as fs from 'fs';

describe('index.ts', () => {
  test('should have 2D types imported and exported', () => {
    const fileContent = fs.readFileSync('./src/index.ts', 'utf-8');

    const expectedContent1 = `import "./2D/types"`;
    const expectedContent2 = `export * from "./2D/types";`;

    expect(fileContent).toContain(expectedContent1);
    expect(fileContent).toContain(expectedContent2);
  });
});
