import { ReactElement } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Nav = (): ReactElement => {
  return (
    <nav className="text-bl sticky top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="static block w-auto justify-start">
          <p className="inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed">
            Wordle
          </p>
        </div>

        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Nav
