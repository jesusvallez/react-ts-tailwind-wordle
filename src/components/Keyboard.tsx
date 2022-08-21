import { BackspaceLogo, EnterLogo } from '@/assets'
import {
  firstLineKeyboard,
  secondLineKeyboard,
  thirdLineKeyboard,
} from '@/helpers/string'
import { ReactElement } from 'react'
import Button from './Button'

const Keyboard = (): ReactElement => {
  const buttonSize = 'h-10 flex-1'

  const simulateKeyPressButton = (word: string) => {
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: word,
      }),
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        {[...firstLineKeyboard].map((word) => {
          return (
            <Button
              key={word}
              className={buttonSize}
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
              className={buttonSize}
              onClick={() => simulateKeyPressButton(word)}
            >
              {word}
            </Button>
          )
        })}
      </div>
      <div className="flex gap-1">
        <Button
          className={buttonSize}
          onClick={() => simulateKeyPressButton('Backspace')}
        >
          <BackspaceLogo />
        </Button>
        {[...thirdLineKeyboard].map((word) => {
          return (
            <Button
              key={word}
              className={buttonSize}
              onClick={() => simulateKeyPressButton(word)}
            >
              {word}
            </Button>
          )
        })}
        <Button
          className={buttonSize}
          onClick={() => simulateKeyPressButton('Enter')}
        >
          <EnterLogo />
        </Button>
      </div>
    </div>
  )
}

export default Keyboard
