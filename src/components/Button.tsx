import { preventKey } from '@/helpers/wordle'
import clsx from 'clsx'
import { ReactElement, PropsWithChildren, ButtonHTMLAttributes, memo } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  keyToPrevent?: string
}

const Button = ({
  className = '',
  keyToPrevent = '',
  type = 'button',
  children,
  ...rest
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <button
      {...rest}
      type={type}
      onKeyDown={(e) => keyToPrevent && preventKey(e, keyToPrevent)}
      className={clsx(
        'flex items-center justify-center gap-1 p-2',
        'text-xs font-bold uppercase sm:text-sm',
        'transition-all duration-150 ease-linear',
        'rounded border outline-none focus:outline-none',
        'text-neutral-800 dark:text-neutral-100',
        'border-neutral-500 dark:border-neutral-200',
        'hover:text-white dark:hover:text-black',
        'hover:bg-neutral-500 dark:hover:bg-neutral-200',
        'active:bg-neutral-400 dark:active:bg-neutral-400',

        className,
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
