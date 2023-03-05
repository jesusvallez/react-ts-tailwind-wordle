import { words } from '@/content/words'
import { Guesses } from '@/models/cell.model'
import type { KeyboardEvent } from 'react'

const wordleTemplate = (solution: string, tries: number) => {
  const ROWS_SIZE = tries
  const CELL_SIZE = [...solution].length

  const rows: Guesses = new Array(ROWS_SIZE)
  for (let i = 0; i < ROWS_SIZE; i++) {
    rows[i] = new Array(CELL_SIZE)

    for (let j = 0; j < CELL_SIZE; j++) {
      rows[i][j] = {
        id: j + 1,
        word: '',
        state: 'blank',
      }
    }
  }

  return rows
}

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

const preventKey = (e: KeyboardEvent<HTMLButtonElement>, key: KeyboardEvent<HTMLButtonElement>['key']) => {
  e.key === key && e.preventDefault()
}

export { wordleTemplate, getWord, preventKey }
