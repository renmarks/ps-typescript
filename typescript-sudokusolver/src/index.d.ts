type SudokuValue = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type SudokuRank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type SudokuPuzzle = SudokuSquare[]
type SudokuUnit = SudokuSquare[]
type SudokuSquare = {
  definiteValue : SudokuValue | null,
  x : SudokuRank,
  y : SudokuRank,
  possibleValues : any
}
