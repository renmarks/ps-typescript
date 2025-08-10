/// <reference path="index.d.ts" />

import { readFileSync } from 'fs'
import { chunk, groupBy } from 'lodash'

/**
 * Generates the v-rank (which 3x3 unit a square belongs to) for any given square
 */
function vFromXY(x : SudokuRank,y : SudokuRank) : SudokuRank {
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

export function readSudokuFile(filename : string) : string {
  const rawFileText : string = readFileSync(filename, "utf-8")
  return rawFileText

}
export function sudokuPuzzleFromTxtFile(filename : string) : SudokuPuzzle  {

  const rawFileText : string = readFileSync(filename, "utf-8")
  let rows = 
    chunk(rawFileText,9)

  console.table(rows)

  const squares : SudokuSquare[] = []
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      let value : SudokuValue = rows[y][x] as SudokuValue
      let unit : SudokuSquare = {
        x : x as SudokuRank,
        y : y as SudokuRank,
        definiteValue : value !== "0" ? value : null,
        possibleValues : value !== "0" ? null : {
          "1" : true,
          "2" : true,
          "3" : true,
          "4" : true,
          "5" : true,
          "6" : true,
          "7" : true,
          "8" : true,
          "9" : true
        }
      }
      squares.push(unit)
    }
  }

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
  // const used : Record<SudokuValue, boolean> = {}
  for (const value of unit.map(s => s.definiteValue)) {
    if (value !== null) {
      used[value] = true
    }
  }

  for (const square of unit.filter(s => !s.definiteValue)) {
    for (const value in used) {
      if (square.possibleValues !== null) {

        if (used[value]) square.possibleValues[value as SudokuValue] = false
      }
    }
  }
  console.log(unit, used)
  for (const square of unit) {
    if (!square.possibleValues) continue
    console.log(square.possibleValues)
    const possibilities = Object.entries(square.possibleValues).filter(a => a[1] === true)
    if (possibilities.length === 1) {
      // console.info("Solved", square.name)
      console.log(square)
      // square.definiteValue = +possibilities[0][0]
      square.definiteValue = possibilities[0][0] as SudokuValue
      square.possibleValues = null
      console.log(square)
      count += 1
    }
  }
  return count
}

export function countSolved (puzzle : SudokuPuzzle) : number {
  return puzzle.filter(a => a.definiteValue).length
}

export function solve(puzzle : SudokuPuzzle) {
  const units = sudokuPuzzleToUnits(puzzle)
  let total = Infinity
  let attempts = 0
  while (total > 0 && attempts < 10000) {
    total = 0
    for (const unit of units) {
      let count = removePossiblities(unit)
      total += count
    }
    attempts ++
  }
  return units
}

export function solveAll() {
  let solutions = [] 
  for (let i = 1; i <= 3; i++) {
    const puzzle = sudokuPuzzleFromTxtFile(`puzzles/${i}.txt`)
    const solved= solve(puzzle)
    solutions.push(solved)

  }
  return solutions
}
