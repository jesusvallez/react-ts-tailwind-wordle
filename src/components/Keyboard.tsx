import { memo, ReactElement, useCallback } from 'react'
import { SVGBackspace, SVGEnter } from '@/assets'
import {
  firstLineKeyboard,
  secondLineKeyboard,
  thirdLineKeyboard,
} from '@/helpers/string'
import Button from './Button'
import clsx from 'clsx'

const Keyboard = (): ReactElement => {
  const buttonSize = 'w-2 h-14 sm:h-10 flex-1'

  const simulateKeyPressButton = useCallback((word: string) => {
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: word,
      }),
    )
  }, [])

  return (
    <div className="container mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          {[...firstLineKeyboard].map((word) => {
            return (
              <Button
                key={word}
                className={clsx(buttonSize)}
                onClick={() => simulateKeyPressButton(word)}
              >
                {word}
              </Button>
            )
          })}
        </div>
        <div className="flex gap-1">
          {[...secondLineKeyboard].map((word) => {
            return (
              <Button
                key={word}
                className={clsx(buttonSize)}
                onClick={() => simulateKeyPressButton(word)}
              >
                {word}
              </Button>
            )
          })}
        </div>
        <div className="flex gap-1">
          <Button
            className={clsx(buttonSize, 'flex-1')}
            onClick={() => simulateKeyPressButton('Backspace')}
          >
            <SVGBackspace />
          </Button>
          {[...thirdLineKeyboard].map((word) => {
            return (
              <Button
                key={word}
                className={clsx(buttonSize)}
                onClick={() => simulateKeyPressButton(word)}
              >
                {word}
              </Button>
            )
          })}
          <Button
            className={clsx(buttonSize, 'flex-1')}
            onClick={() => simulateKeyPressButton('Enter')}
          >
            <SVGEnter />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(Keyboard)
