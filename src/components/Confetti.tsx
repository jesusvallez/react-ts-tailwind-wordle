import { ReactElement } from 'react'
import useConfetti from '@/hooks/useConfetti'
import ReactCanvasConfetti from 'react-canvas-confetti'

interface Props {
  isCorrect: boolean
}

const Confetti = ({ isCorrect }: Props): ReactElement => {
  const { instance } = useConfetti({ isCorrect })

  return (
    <ReactCanvasConfetti
      refConfetti={instance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  )
}

export default Confetti
