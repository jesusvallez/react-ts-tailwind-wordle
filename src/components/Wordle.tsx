import { lazy, ReactElement, useEffect, useState, startTransition } from 'react'
import useWordle from '@/hooks/useWordle'
import clsx from 'clsx'
import Card from './Card'

const Confetti = lazy(() => import('./Confetti'))

interface Props {
  solution: string
  tries?: number
}

const Wordle = ({ solution, tries = 6 }: Props): ReactElement => {
  const [showConfetti, setConfetti] = useState<boolean>(false)
  const { isCorrect, currentGuess, guesses, currentTry } = useWordle({
    solution,
    tries,
  })

  useEffect(() => {
    if (isCorrect) {
      startTransition(() => {
        setConfetti(true)
      })
    }
  }, [isCorrect])

  return (
    <div className="flex flex-col gap-1">
      <div>finish?: {isCorrect ? 'yees' : 'no'}</div>
      <div>word: {currentGuess}</div>
      <div>solution - {solution}</div>

      {showConfetti && <Confetti isCorrect={isCorrect} />}
      <div
        className="grid gap-[4px] sm:gap-[8px]"
        style={{
          gridTemplateColumns: `repeat(${solution.length}, minmax(0, 1fr))`,
        }}
      >
        {guesses.map((guess, i) => {
          return guess?.map(({ state, word, id }) => (
            <Card
              id={id}
              key={`${i - id}`}
              state={state}
              className={clsx(i === currentTry && isCorrect && `animate-flip`)}
            >
              {word}
            </Card>
          ))
        })}
      </div>
    </div>
  )
}

export default Wordle
