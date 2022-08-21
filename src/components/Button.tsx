import { preventKey } from '@/helpers/wordle'
import clsx from 'clsx'
import {
  ReactElement,
  PropsWithChildren,
  ButtonHTMLAttributes,
  memo,
} from 'react'

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
        'flex items-center justify-center gap-1 rounded border border-gray-500 p-2 text-xs font-bold uppercase text-gray-800 outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:text-white focus:outline-none active:bg-gray-600 dark:border-gray-200 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-black dark:active:bg-gray-400 sm:text-sm',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
