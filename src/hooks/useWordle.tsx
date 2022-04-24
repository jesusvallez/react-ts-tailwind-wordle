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
  const [history, setHistory] = useState<string[]>([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  const formatGuess = (): Guess => {
    const solutionToLower = solution.toLowerCase()
    const solutionArray = [...solutionToLower]
    const formattedGuess = [...currentGuess.toLowerCase()].map(
      (char, index) => {
        const tmp: KeyGuess = { key: char, color: 'grey' }

        console.log(
          solution,
          char,
          solution[index],
          solutionArray.includes(char),
        )

        if (solutionToLower[index] === char) {
          tmp.color = 'green'
        } else if (solutionArray.includes(char) && tmp.color !== 'green') {
          tmp.color = 'yellow'
        }

        return tmp
      },
    )

    return formattedGuess
  }

  const handleKeyup = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      console.log('key Enter', key)
      const formattedGuess = formatGuess()
      console.log(formattedGuess)
      setCurrentGuess('')
      setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses, formattedGuess]
        return newGuesses
      })
    } else if (key === 'Backspace') {
      console.log('key Backspace', key)
      setCurrentGuess((prev) => prev.slice(0, -1))
    } else if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
      console.log('key', key)
    }
  }

  return { currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle
