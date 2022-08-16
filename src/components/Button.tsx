import { preventKey } from '@/helpers/wordle'
import clsx from 'clsx'
import {
  ReactElement,
  PropsWithChildren,
  ButtonHTMLAttributes,
  memo,
} from 'react'

interface Props {
  className?: string
  keyToPrevent?: string
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = ({
  className = '',
  keyToPrevent = '',
  children,
  onClick,
  type = 'button',
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      onKeyDown={(e) => keyToPrevent && preventKey(e, keyToPrevent)}
      className={clsx(
        'rounded border border-gray-500 px-4 py-2 text-xs font-bold uppercase text-gray-800 outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:text-white focus:outline-none active:bg-gray-600 dark:border-gray-200 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-black dark:active:bg-gray-400 sm:text-sm',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
