import { useState, useEffect, PropsWithChildren, useCallback } from 'react'
import { LOCALSTORAGE_KEY, Theme, ThemeContext } from '@/hooks/useThemeMode'
import { usePrefersDarkMode } from '@/hooks/usePrefersDarkMode'

const LIGHT_MODE = Theme.light
const DARK_MODE = Theme.dark

const ThemeContextContainer = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = usePrefersDarkMode()
  const [prefersTheme] = useState<Theme>(() => (prefersDarkMode ? DARK_MODE : LIGHT_MODE))

  const [theme, setTheme] = useState<Theme>((localStorage.getItem(LOCALSTORAGE_KEY) as Theme) || prefersTheme)

  const changeCurrentTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem(LOCALSTORAGE_KEY, newTheme)
  }, [])

  const toggleCurrentTheme = useCallback(() => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light
    setTheme(newTheme)
    localStorage.setItem(LOCALSTORAGE_KEY, newTheme)
  }, [theme])

  const setLightTheme = useCallback(() => {
    setTheme(LIGHT_MODE)
    localStorage.setItem(LOCALSTORAGE_KEY, LIGHT_MODE)
  }, [])

  const setDarkTheme = useCallback(() => {
    setTheme(DARK_MODE)
    localStorage.setItem(LOCALSTORAGE_KEY, DARK_MODE)
  }, [])

  const setSystemTheme = useCallback(() => {
    setTheme(prefersDarkMode ? DARK_MODE : LIGHT_MODE)
    localStorage.removeItem(LOCALSTORAGE_KEY)
  }, [])

  useEffect(() => {
    if (theme === LIGHT_MODE) {
      document.body.classList.remove(DARK_MODE)
    } else {
      document.body.classList.add(DARK_MODE)
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        changeCurrentTheme,
        toggleCurrentTheme,
        setLightTheme,
        setDarkTheme,
        setSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextContainer
