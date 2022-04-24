import { useState } from 'react'

interface KeyGuess {
  key: string
  color: 'grey' | 'green' | 'yellow'
}

type Guess = KeyGuess[]
type Guesses = Guess[]

interface Props {
  solution: string
}

const useWordle = ({ solution }: Props) => {
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [guesses, setGuesses] = useState<Guesses>([]) // each guess is an array
  // const [history, setHistory] = useState<string[]>([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  const formatGuess = (): Guess => {
    let finish = true
    const solutionToLower = solution.toLowerCase()
    const solutionArray = [...solutionToLower]
    const formattedGuess = [...currentGuess.toLowerCase()].map(
      (char, index) => {
        let color: KeyGuess['color']

        if (solutionToLower[index] === char) {
          color = 'green'
        } else if (solutionArray.includes(char)) {
          color = 'yellow'
          finish = false
        } else {
          color = 'grey'
          finish = false
        }

        return { key: char, color }
      },
    )

    setIsCorrect(finish)
    return formattedGuess
  }

  const handleKeyup = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      if (currentGuess.length === [...solution].length) {
        setGuesses((prevGuesses) => [...prevGuesses, formatGuess()])
        setCurrentGuess('')
      }
    } else if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1))
    } else if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < [...solution].length) {
        setCurrentGuess((prev) => prev + key)
      }
    }
  }

  return { currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle
