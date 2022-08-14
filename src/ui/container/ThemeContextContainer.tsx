import { useState, useEffect, PropsWithChildren, useCallback } from 'react'

import { LOCALSTORAGE_KEY, Theme, ThemeContext } from '../hook/useThemeMode'
import { usePrefersDarkMode } from '@/hooks/usePrefersDarkMode'

const DARK_MODE = Theme.dark
const LIGHT_MODE = Theme.light

const ThemeContextContainer = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = usePrefersDarkMode()
  const [prefersTheme] = useState<Theme>(() =>
    prefersDarkMode ? DARK_MODE : LIGHT_MODE,
  )

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCALSTORAGE_KEY) as Theme) || prefersTheme,
  )

  const changeCurrentTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem(LOCALSTORAGE_KEY, newTheme)
  }, [])

  useEffect(() => {
    if (theme === LIGHT_MODE) {
      document.body.classList.remove(DARK_MODE)
    } else {
      document.body.classList.add(DARK_MODE)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextContainer
