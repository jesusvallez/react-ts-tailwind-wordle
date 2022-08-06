export type State = 'blank' | 'error' | 'present' | 'correct'
export interface Cell {
  word: string
  state: State
}

export type Guess = Cell[]
export type Guesses = Guess[]
