const { sudokuPuzzleFromTxtFile, sudokuPuzzleToUnits } = require('../src/index')
// const { SudokuSquare } = require('../src/index.d.ts')
const data = sudokuPuzzleFromTxtFile('./puzzles/1.txt')
const units = sudokuPuzzleToUnits(data)
// co
console.log(units)
if (units.length !== 27) throw new Error()

let sample = units.find((unit : any) => unit[0].x == 2)

if (!sample.every((square : any) => square.x === 2)) {
  throw new Error()
}
