export type State = 'blank' | 'error' | 'present' | 'correct'
export interface Cell {
  id: number
  word: string
  state: State
}

export type Guess = Cell[]
export type Guesses = Guess[]
