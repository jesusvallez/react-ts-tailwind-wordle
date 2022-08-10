import { lazy, ReactElement, useEffect, useState, startTransition } from 'react'
import useWordle from '@/hooks/useWordle'
import clsx from 'clsx'
import Card from './Card'
import Button from './Button'

const Confetti = lazy(() => import('./Confetti'))
const Modal = lazy(() => import('./Modal'))

interface Props {
  tries?: number
}

const Wordle = ({ tries = 6 }: Props): ReactElement => {
  const [showCongratulation, setCongratulation] = useState<boolean>(false)
  const [showModal, setModal] = useState<boolean>(false)
  const { isCorrect, currentGuess, guesses, currentTry, reset, solution } =
    useWordle({ tries })

  useEffect(() => {
    if (isCorrect) {
      startTransition(() => {
        setCongratulation(true)
        setModal(true)
      })
    }
  }, [isCorrect])

  return (
    <div className="flex flex-col gap-1">
      <div>finish?: {isCorrect ? 'yees' : 'no'}</div>
      <div>word: {currentGuess}</div>
      <div>solution - {solution}</div>

      {showCongratulation && <Confetti isCorrect={isCorrect} />}
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
              key={`${i}-${id}`}
              state={state}
              className={clsx(i === currentTry && isCorrect && `animate-flip`)}
            >
              {word}
            </Card>
          ))
        })}
      </div>
      <Button type="reset" onClick={reset}>
        Reset
      </Button>

      {showCongratulation && showModal && <Modal close={setModal} />}
    </div>
  )
}

export default Wordle
