import { readFileSync } from 'fs'
import { chunk, groupBy } from 'lodash'

type SudokuValue = null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | number

// interface SudokuPuzzle {
//   solved? : boolean,
//   squares : SudokuSquare[]
// }

type SudokuPuzzle = SudokuSquare[]

type SudokuUnit = SudokuSquare[]
type SudokuSquare = {
  name : string
  definiteValue : SudokuValue,
  x : number,
  y : number,
  // v : number
  possibleValues : null | {
    [index : number] : boolean
    // 1 : boolean,
    // 2 : boolean,
    // 3 : boolean,
    // 4 : boolean,
    // 5 : boolean,
    // 6 : boolean,
    // 7 : boolean,
    // 8 : boolean,
    // 9 : boolean
  }
}

function vFromXY(x : number,y : number) : number {
  if (y <= 2) {
    if (x <= 2) return 0
    if (x <= 5) return 1
    return 2
  }

  if (y <= 5) {
    if (x <= 2) return 3
    if (x <= 5) return 4
    return 5
  }

  if (x <= 2) return 6
  if (x <= 5) return 7
  return 8
}


export function sudokuPuzzleFromTxtFile(filename : string) : SudokuPuzzle  {

  const rawFileText : string = readFileSync(filename, "utf-8")
  let rows = 
    chunk(rawFileText,9)

  const squares : SudokuSquare[] = []
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      let value : SudokuValue = +rows[y][x]
      let unit : SudokuSquare = {
        name : `Y${y}X${x}`,
        x,
        y,
        // v : vFromXY(x,y),
        definiteValue : value || null,
        possibleValues : value ? null : {
          1 : !value,
          2 : !value,
          3 : !value,
          4 : !value,
          5 : !value,
          6 : !value,
          7 : !value,
          8 : !value,
          9 : !value
        }
      }
      console.info(unit)
      squares.push(unit)
    }
  }

  console.info(rawFileText)
  console.table(rows)
  // let a : SudokuPuzzle = { 
    // squares : units
  // }
  return squares

}

export function sudokuPuzzleToXUnits (puzzle : SudokuPuzzle) : SudokuUnit[] {
  return Object.values(groupBy(puzzle,square => square.x))
}

export function sudokuPuzzleToYUnits (puzzle : SudokuPuzzle) : SudokuUnit[] {
  return Object.values(groupBy(puzzle,square => square.y))
}

export function sudokuPuzzleToVUnits (puzzle : SudokuPuzzle) : SudokuUnit[] {
  return Object.values(groupBy(puzzle,square => vFromXY(square.x,square.y)))
}

export function sudokuPuzzleToUnits (puzzle : SudokuPuzzle) : SudokuUnit[] {
  return [
    ... sudokuPuzzleToXUnits(puzzle),
    ... sudokuPuzzleToYUnits(puzzle),
    ... sudokuPuzzleToVUnits(puzzle),
  ]
}

export function removePossiblities (unit : SudokuUnit) : number {
  let count = 0
  const used : any = {}
  for (const value of unit.map(s => s.definiteValue)) {
    if (value !== null) {
      used[value] = true
    }
  }

  for (const square of unit.filter(s => !s.definiteValue)) {
    for (const value in used) {
      if (square.possibleValues !== null) {
        if (used[value]) square.possibleValues[+value] = false
      }
    }
  }
  console.log(unit, used)
  for (const square of unit) {
    if (!square.possibleValues) continue
    const possibilities = Object.entries(square.possibleValues).filter(a => a[1] === true)
    if (possibilities.length === 1) {
      console.info("Solved", square.name)
      console.log(square)
      square.definiteValue = +possibilities[0][0]
      square.possibleValues = null
      console.log(square)
      count += 1
    }
  }
  // return unit
  return count
}

export function countSolved (puzzle : SudokuPuzzle) : number {
  return puzzle.filter(a => a.definiteValue).length
}
