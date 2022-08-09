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
        'inline-block w-full rounded border-2 border-blue-600 px-6 py-2 text-xs font-medium uppercase leading-normal text-blue-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
