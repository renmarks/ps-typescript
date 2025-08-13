import * as fs from 'fs';

// Function to check if tsconfig.json exists and read its content
const readTsConfig = () => {
  const tsconfigPath = './tsconfig.json';

  if (fs.existsSync(tsconfigPath)) {
    const tsconfigContent = fs.readFileSync(tsconfigPath, 'utf8');
    return JSON.parse(tsconfigContent);
  } 
  else {
    return null; // File doesn't exist, return null
  }
};

// Test for checking if "module" is set to "commonjs" in tsconfig.json
test('tsconfig.json defined with correct properties', () => {
    // Load tsconfig and get the parsed content
    const tsconfig = readTsConfig();

    expect(tsconfig).toBeTruthy();

    // Check if "compilerOptions" exist and "module" is set to "commonjs"
    expect(tsconfig.compilerOptions).toBeDefined();

    expect(tsconfig.compilerOptions.target).toBe('es6');
    expect(tsconfig.compilerOptions.module).toBe('commonjs');
    expect(tsconfig.compilerOptions.esModuleInterop).toBe(true);
    expect(tsconfig.compilerOptions.outDir).toBe("dist");

    expect(tsconfig.compilerOptions.types).toContain("node");
    expect(tsconfig.compilerOptions.types).toContain("jest");

    expect(tsconfig.include).toContain("src");
    expect(tsconfig.include).toContain("app.ts");
});
