import clsx from 'clsx'
import { memo, PropsWithChildren, ReactElement } from 'react'

interface Props {
  state: string
  className?: string
  id?: number
}

const Card = ({
  state,
  id,
  className,
  children,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <div
      style={{ animationDelay: `${id}00ms` }}
      className={clsx(
        'flex h-16 w-16 content-center items-center justify-center text-3xl font-bold uppercase text-white',
        className,
        state === 'present' && 'bg-yellow-500',
        state === 'correct' && 'bg-green-500',
        state === 'error' && 'bg-zinc-500',
        state === 'blank' && 'border-2 border-solid border-gray-400 text-black',
      )}
    >
      {children}
    </div>
  )
}

export default memo(Card)
