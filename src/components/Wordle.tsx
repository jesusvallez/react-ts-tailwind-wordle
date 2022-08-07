import useWordle from '@/hooks/useWordle'
import clsx from 'clsx'
import { ReactElement } from 'react'
import Card from './Card'
import Confetti from './Confetti'

interface Props {
  solution: string
  tries?: number
}

const Wordle = ({ solution, tries = 6 }: Props): ReactElement => {
  const { isCorrect, currentGuess, guesses, currentTry } = useWordle({
    solution,
    tries,
  })

  return (
    <div className="flex flex-col gap-1">
      <div>finish?: {isCorrect ? 'yees' : 'no'}</div>
      <div>word: {currentGuess}</div>
      <div>solution - {solution}</div>

      <Confetti isCorrect={isCorrect} />

      {guesses.map((guess, i) => (
        <div className="flex gap-1" key={i}>
          {guess?.map(({ state, word }, j) => (
            <Card
              className={clsx(i === currentTry && isCorrect && `animate-flip`)}
              state={state}
              key={`${i - j}`}
            >
              {word}
            </Card>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Wordle
