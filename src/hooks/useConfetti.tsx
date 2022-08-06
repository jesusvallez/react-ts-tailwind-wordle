/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateRandomDecimal } from '@/helpers/number'
import { ConfettiOptions } from '@/models/confetti.model'
import { useRef, useCallback, useEffect } from 'react'

interface UseConfetti {
  instance: any
}

interface Props {
  isCorrect: boolean
}

const useConfetti = ({ isCorrect }: Props): UseConfetti => {
  const refAnimationInstance = useRef<any>(undefined)
  const instance = useCallback((instance: any) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback(
    (particleRatio: number, opts: ConfettiOptions) => {
      refAnimationInstance.current &&
        refAnimationInstance.current({
          ...opts,
          origin: { y: 0.8 },
          particleCount: Math.floor(200 * particleRatio),
        })
    },
    [],
  )

  const fire = useCallback(() => {
    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })
    makeShot(0.1, {
      spread: 120,
      startVelocity: 80,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 110,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 220,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })

    makeShot(0.2, {
      spread: 60,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })

    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      ticks: 300,
      scalar: generateRandomDecimal(0.5, 1.5, 0),
      gravity: generateRandomDecimal(0, 1.5, 2),
    })
  }, [makeShot])

  useEffect(() => {
    !isCorrect && fire()
  }, [isCorrect])

  return { instance }
}

export default useConfetti
