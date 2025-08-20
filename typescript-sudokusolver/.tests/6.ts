const { sudokuPuzzleFromTxtFile } = require('../src/index')
// const { SudokuSquare } = require('../src/index.d.ts')
const data = sudokuPuzzleFromTxtFile('./puzzles/1.txt')
const sample = data.find((s : any) => s.x == 2 && s.y == 5)
console.log(sample)
// const fileContents = readSudokuFile('./puzzles/1.txt')
// if (fileContents !== "001700509573024106800501002700295018009400305652800007465080071000159004908007053") {
//   throw new Error()
// }
if (sample.definiteValue !== "2") {
  throw new Error()
}
