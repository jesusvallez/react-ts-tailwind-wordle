export interface Cell {
  word: string
  state: 'blank' | 'error' | 'present' | 'correct'
}

export type Guess = Cell[]
export type Guesses = Guess[]
