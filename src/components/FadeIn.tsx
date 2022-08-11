import { PropsWithChildren, ReactElement } from 'react'

const FadeIn = ({ children }: PropsWithChildren): ReactElement => {
  return <div className="animate-face-in-popup">{children}</div>
}

export default FadeIn
