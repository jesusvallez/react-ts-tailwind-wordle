import { lazy, ReactElement, useEffect, useState, startTransition } from 'react'
import useWordle from '@/hooks/useWordle'
import Card from './Card'
import Button from './Button'
import FadeIn from './FadeIn'
import useThemeMode, { Theme } from '@/ui/hook/useThemeMode'

const Confetti = lazy(() => import('./Confetti'))
const Modal = lazy(() => import('./Modal'))

interface Props {
  tries?: number
}

const Wordle = ({ tries = 6 }: Props): ReactElement => {
  const { currentTheme, changeCurrentTheme } = useThemeMode()
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
    }
  }, [isCorrect])

  return (
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
      <Button preventEnterEvent type="button" onClick={reset}>
        Reset
      </Button>
      <Button
        preventEnterEvent
        type="button"
        onClick={() =>
          changeCurrentTheme(
            currentTheme === Theme.light ? Theme.dark : Theme.light,
          )
        }
      >
        Change Theme to{' '}
        {currentTheme === Theme.light ? Theme.dark : Theme.light}
      </Button>

      {showCongratulation && <Confetti isCorrect={isCorrect} />}
      {showCongratulation && showModal && (
        <FadeIn>
          <Modal close={setModal} />
        </FadeIn>
      )}
    </div>
  )
}

export default Wordle
