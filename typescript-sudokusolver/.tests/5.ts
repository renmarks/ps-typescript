const { readSudokuFile } = require('../src/index')
const fileContents = readSudokuFile('./puzzles/1.txt')
const compareString = "001700509573024106800501002700295018009400305652800007465080071000159004908007053"
console.table({fileContents, compareString})
if (!fileContents.includes(compareString)) {
  throw new Error()
}
