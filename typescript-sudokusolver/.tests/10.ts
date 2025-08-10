const { solveAll } = require('../src/index')
// const { SudokuSquare } = require('../src/index.d.ts')
// const data = sudokuPuzzleFromTxtFile('./puzzles/1.txt')
const solvedSet = solveAll()
// console.log(solved)

for (const solved of solvedSet) {

  for (const unit of solved) {
    for (const square of unit) {
      if (square.definiteValue === "0" || !square.definiteValue) throw new Error()
    }
  }
}
