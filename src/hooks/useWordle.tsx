import { useCallback, useEffect, useState } from 'react'
import { Cell, Guess, Guesses } from '@/models/cell.model'
import { wordleTemplate } from '@/helpers/wordle'

interface UseWordle {
  currentGuess: string
  currentTry: number
  guesses: Guesses
  isCorrect: boolean
  reset: () => void
}

interface Props {
  solution: string
  tries?: number
}

const useWordle = ({ solution, tries = 6 }: Props): UseWordle => {
  const [currentTry, setCurrentTry] = useState<number>(0)
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [guesses, setGuesses] = useState<Guesses>(
    wordleTemplate(solution, tries),
  )

  const reset = useCallback(() => {
    setCurrentGuess('')
    setGuesses(wordleTemplate(solution, tries))
    setIsCorrect(false)
    setCurrentTry(0)
  }, [solution, tries])

  const formatGuess = (): Guess => {
    let finish = true
    const solutionToLower = solution.toLowerCase()
    const solutionArray = [...solutionToLower]
    const formattedGuess: Guess = [...currentGuess.toLowerCase()].map(
      (word, index) => {
        let state: Cell['state']

        if (solutionToLower[index] === word) {
          state = 'correct'
        } else if (solutionArray.includes(word)) {
          state = 'present'
          finish = false
        } else {
          state = 'error'
          finish = false
        }

        return { state, word }
      },
    )

    if (!finish) {
      setCurrentTry((prev) => prev + 1)
    }

    setIsCorrect(finish)
    return formattedGuess
  }

  const handleKeyup = ({ key }: KeyboardEvent) => {
    if (currentTry < tries && !isCorrect) {
      if (key === 'Enter') {
        if (currentGuess.length === [...solution].length) {
          setCurrentGuess('')
          setGuesses((prevGuesses) => {
            prevGuesses[currentTry] = formatGuess()
            return prevGuesses
          })
        }
      } else if (key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1))
        setGuesses((prevGuesses) => {
          prevGuesses[currentTry][currentGuess.length - 1] = {
            ...prevGuesses[currentTry][currentGuess.length - 1],
            word: '',
          }

          return prevGuesses
        })
      } else if (/^[a-zA-Z\u00f1\u00d1]$/.test(key)) {
        if (currentGuess.length < [...solution].length) {
          setCurrentGuess((prev) => prev + key)
          setGuesses((prevGuesses) => {
            prevGuesses[currentTry][currentGuess.length] = {
              ...prevGuesses[currentTry][currentGuess.length],
              word: key,
            }

            return prevGuesses
          })
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyup)

    return () => window.removeEventListener('keydown', handleKeyup)
  }, [handleKeyup])

  return { currentGuess, currentTry, guesses, isCorrect, reset }
}

export default useWordle
