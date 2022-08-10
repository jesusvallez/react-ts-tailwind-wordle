import clsx from 'clsx'
import {
  ReactElement,
  PropsWithChildren,
  ButtonHTMLAttributes,
  memo,
} from 'react'

interface Props {
  className?: string
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = ({
  className,
  children,
  onClick,
  type = 'button',
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'mr-1 mb-1 rounded border border-gray-500 px-6 py-3 text-sm font-bold uppercase text-gray-500 outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:text-white focus:outline-none active:bg-gray-600',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
