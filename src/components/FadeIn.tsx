import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react'

interface Props {
  classname?: HTMLAttributes<HTMLDivElement>['className']
}

const FadeIn = ({
  children,
  classname,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <div className={clsx('animate-face-in-popup', classname)}>{children}</div>
  )
}

export default FadeIn
