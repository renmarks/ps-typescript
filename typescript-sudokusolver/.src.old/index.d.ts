
// type SudokuValue = null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | number
type SudokuValue = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type SudokuRank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type SudokuPuzzle = SudokuSquare[]
type SudokuUnit = SudokuSquare[]
type SudokuSquare = {
  name : string
  definiteValue : any,
  x : any,
  y : any,
  // x : SudokuCoordinate,
  // y : SudokuCoordinate,
  possibleValues : null | {
    [index : number] : boolean
  }
}