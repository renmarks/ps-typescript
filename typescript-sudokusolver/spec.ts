import { countSolved, removePossiblities, sudokuPuzzleFromTxtFile, sudokuPuzzleToUnits, sudokuPuzzleToXUnits } from './src'

const puzzle = sudokuPuzzleFromTxtFile('puzzles/1.txt')
console.log(JSON.stringify(puzzle, null, 2))
const units = sudokuPuzzleToUnits(puzzle)
// expect(units.length).toBe(27)
console.info("Units", units.length)
console.log("Solvedct", countSolved(puzzle))
// console.table(xUnits)
// return
// console.log(JSON.stringify(units, null, 2))

// // const unit = xUnits[0]
let total = Infinity
while (total > 0) {
  total = 0
  for (const unit of units) {
    let count = removePossiblities(unit)
    console.info(count)
    total += count
    // const next = removePossiblities(unit)
    // console.info(next)
  }
  console.info(total)
  console.log("Solvedct", countSolved(puzzle))
}

// console.log("Solvedct", countSolved, puzzle)
