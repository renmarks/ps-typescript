import * as fs from 'fs';

export function readSudokuFile(filePath: string): string {
 return fs.readFileSync(filePath, 'utf-8');
}

interface SudokuSquare {
  x: number;
  y: number;
  definiteValue:  number | null;
  possibleValues: { [key: string]: boolean;
                  };
}

export function sudokuPuzzleFromTxtFile(filePath: string): SudokuSquare[] {
  const insideFile = readSudokuFile(filePath);
  const squares = SudokuSquare[] = [];

  for (let i = 0; i < 81; i++) {
    const char = insideFile[i];
    const x = i % 9;
    const y = Math.floor(i/9);
    const numericValue = parseInt(char, 10)
    const definiteValue = numericValue !== 0 ? numericValue : null;
    const potentialValues: { [key: string]: boolean} = {};
    for (let digit = 1; digit <= 9; digit++) {
        possibleValues[digit.toString()] = definiteValue === null;
      
    }
    if (definiteValue !== null) {
      for (let digit = 1; digit <= 9; digit++) {
        possibleValues[digit.toString()] = digit === definiteValue;
      }
    }
    squares.push({
      x,
      y,
      definiteValue,
      possibleValues
    });
  }
}




