import { State } from '@/models/cell.model'

const wordleTemplate = (solution: string, tries: number) => {
  const state: State = 'blank'

  return [...Array(tries)].map((_) =>
    [...Array([...solution].length)].map((_, i) => ({
      id: i + 1,
      state,
      word: '',
    })),
  )
}

export { wordleTemplate }
