import { lazy, ReactElement, useEffect, useState, startTransition } from 'react'
import useWordle from '@/hooks/useWordle'
import Card from './Card'
import Button from './Button'
import FadeIn from './FadeIn'

const Confetti = lazy(() => import('./Confetti'))
const Modal = lazy(() => import('./Modal'))

interface Props {
  tries?: number
}

const Wordle = ({ tries = 6 }: Props): ReactElement => {
  const [showCongratulation, setCongratulation] = useState<boolean>(false)
  const [showModal, setModal] = useState<boolean>(false)
  const { isCorrect, guesses, currentTry, reset, solution } = useWordle({
    tries,
  })

  useEffect(() => {
    console.log(solution)
  }, [solution])

  useEffect(() => {
    if (isCorrect) {
      startTransition(() => {
        setCongratulation(true)
        setModal(true)
      })
    } else if (currentTry === tries) {
      startTransition(() => {
        setModal(true)
      })
    }
  }, [isCorrect, currentTry])

  return (
    <div className="my-0 mx-auto flex max-w-3xl flex-col items-center gap-2 self-start px-2 pt-4 pb-2 text-center text-stone-900 sm:px-6 sm:pt-6 sm:pb-4">
      <div className="flex flex-col gap-1">
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
                isCorrect={currentTry === i && isCorrect}
              >
                {word}
              </Card>
            ))
          })}
        </div>
        <Button
          keyToPrevent="Enter"
          type="button"
          onClick={reset}
          className="mt-4 gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Reset
        </Button>

        {showCongratulation && <Confetti isCorrect={isCorrect} />}
        {showModal && (
          <FadeIn classname={!isCorrect ? 'animate-face-in' : ''}>
            <Modal
              title={isCorrect ? 'CONGRATS!!' : 'OH NOO! YOU LOSE'}
              close={setModal}
            >
              {isCorrect
                ? `You did it. You won! If you want, you can play again. Try it`
                : `I am so sorry, the word was "${solution}"... but, do not worry, you will do better next time.`}
            </Modal>
          </FadeIn>
        )}
      </div>
    </div>
  )
}

export default Wordle
