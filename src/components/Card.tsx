import { memo, PropsWithChildren, ReactElement } from 'react'
import { State } from '@/models/cell.model'
import clsx from 'clsx'

interface Props {
  state: State
  className?: string
  isCorrect: boolean
  id?: number
}

const Card = ({
  state,
  id = 0,
  isCorrect,
  children,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <div
      data-testid="card"
      data-delay={isCorrect}
      className={clsx(
        'flex h-12 w-12 content-center items-center justify-center text-3xl font-bold uppercase text-white sm:h-16 sm:w-16',
        isCorrect && `animate-flip`,
        children && state === 'blank' && !isCorrect && 'animate-pop',
        isCorrect && id === 0 && 'animation-delay-[0ms]',
        isCorrect && id === 1 && 'animation-delay-[100ms]',
        isCorrect && id === 2 && 'animation-delay-[200ms]',
        isCorrect && id === 3 && 'animation-delay-[300ms]',
        isCorrect && id === 4 && 'animation-delay-[400ms]',
        isCorrect && id === 5 && 'animation-delay-[500ms]',
        isCorrect && id === 6 && 'animation-delay-[600ms]',
        isCorrect && id === 7 && 'animation-delay-[700ms]',
        state === 'present' && 'bg-yellow-500 dark:bg-yellow-600',
        state === 'correct' && 'bg-green-500 dark:bg-green-600',
        state === 'error' && 'bg-zinc-500 dark:bg-zinc-600',
        state === 'blank' &&
          'border-2 border-solid border-gray-400 text-black dark:border-zinc-600 dark:bg-zinc-800 dark:text-white',
      )}
    >
      {children}
    </div>
  )
}

export default memo(Card)
