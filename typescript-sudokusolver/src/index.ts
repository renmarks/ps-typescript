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
export function sudokuPuzzleFromTxtFile(filename: string): SudokuPuzzle {

  const rawFileText: string = readFileSync(filename, "utf-8");

  // Break the text into 9 rows of 9 characters
  const rows: string[][] = chunk(rawFileText.replace(/\s+/g, ""), 9);

  // Map each row (y) and column (x) to a SudokuSquare
  const squares: SudokuSquare[] = rows.flatMap((row, y) =>
    row.map((ch, x) => {
      let value: SudokuValue = ch as SudokuValue;

      return {
        x: x as SudokuRank,
        y: y as SudokuRank,
        definiteValue: value !== "0" ? value : null,
        possibleValues: value !== "0" ? null : {
          "1": true,
          "2": true,
          "3": true,
          "4": true,
          "5": true,
          "6": true,
          "7": true,
          "8": true,
          "9": true
        }
      } as SudokuSquare;
    })
  );

  return squares;
}

export function sudokuPuzzleToUnits(puzzle: SudokuPuzzle): SudokuUnit[] {
  const xUnits = Object.values(groupBy(puzzle, square => square.x));
  const yUnits = Object.values(groupBy(puzzle, square => square.y));
  const vUnits = Object.values(groupBy(puzzle, square => vFromXY(square.x, square.y)));

  return [...xUnits, ...yUnits, ...vUnits];
}


export function eliminateValues(unit: SudokuUnit): number {
  // Collect all solved values in this unit using Set 
  const solvedValues = new Set(
    unit.filter(square => square.definiteValue !== null)
        .map(square => square.definiteValue)
  )
  
  console.log(unit, Object.fromEntries([...solvedValues].map(v => [v, true])))
  
  let solvedCount = 0
  
  // Process each unsolved square
  unit.forEach(square => {
    if (square.definiteValue !== null || !square.possibleValues) return
    
    // Remove solved values from possibilities using forEach instead of for...in
    solvedValues.forEach(value => {
      if (square.possibleValues![value as SudokuValue]) {
        square.possibleValues![value as SudokuValue] = false
      }
    })
    
    console.log(square.possibleValues)
    
    // Count remaining possibilities using reduce
    const remainingOptions = Object.keys(square.possibleValues).reduce((acc, key) => {
      return square.possibleValues![key as SudokuValue] ? [...acc, key] : acc
    }, [] as string[])
    
    // If only one possibility remains, solve it
    if (remainingOptions.length === 1) {
      console.log(square)
      square.definiteValue = remainingOptions[0] as SudokuValue
      square.possibleValues = null
      console.log(square)
      solvedCount++
    }
  })
  
  return solvedCount
}

export function solve(puzzle: SudokuPuzzle) {
  const units = sudokuPuzzleToUnits(puzzle)
  
  let progressMade = true
  let iterations = 0
  
  do {
    progressMade = false
    iterations++
    
    // Use array methods
    const totalSolved = units.reduce((accumulator, currentUnit) => {
      const solvedInThisUnit = eliminateValues(currentUnit)
      if (solvedInThisUnit > 0) progressMade = true
      return accumulator + solvedInThisUnit
    }, 0)
    
    // Safety check
    if (iterations >= 10000) break
    
  } while (progressMade)
  
  return units
}

export function solveAll() {
  let solvedPuzzles = [] 
  for (let i = 1; i <= 3; i++) {
    const puzzle = sudokuPuzzleFromTxtFile(`puzzles/${i}.txt`)
    const solved= solve(puzzle)
    solvedPuzzles.push(solved)

  }
  return solvedPuzzles
}