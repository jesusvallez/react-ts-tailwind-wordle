import useWordle from '@/hooks/useWordle'
import clsx from 'clsx'
import { ReactElement, useEffect } from 'react'

interface Props {
  solution: string
}

const Wordle = ({ solution }: Props): ReactElement => {
  const { currentGuess, guesses, handleKeyup } = useWordle({
    solution,
  })

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>word: {currentGuess}</div>
      {guesses.length > 0 &&
        guesses.map((guess, index) => {
          return (
            <div className="flex" key={index}>
              {guess.map((keyGuess, keyIndex) => {
                return (
                  <div
                    key={`${index}-${keyIndex}`}
                    className={clsx(
                      'flex justify-center items-center h-8 w-8 m-1 border-black border-2 text-white',
                      keyGuess.color === 'yellow' && 'bg-amber-500',
                      keyGuess.color === 'green' && 'bg-green-700',
                      keyGuess.color === 'grey' && 'bg-gray-500',
                    )}
                  >
                    {keyGuess.key.toLocaleUpperCase()}
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

export default Wordle
