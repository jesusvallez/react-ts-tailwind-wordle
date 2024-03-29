import { createContext, useContext } from 'react'

export const LOCALSTORAGE_KEY = 'theme'
export enum Theme {
  dark = 'dark',
  light = 'light',
}

type ThemeContent = {
  currentTheme: Theme
  changeCurrentTheme: (theme: Theme) => void
  toggleCurrentTheme: () => void
  setLightTheme: () => void
  setDarkTheme: () => void
  setSystemTheme: () => void
}

export const ThemeContext = createContext<ThemeContent>({
  currentTheme: Theme.light,
  changeCurrentTheme: () => {},
  toggleCurrentTheme: () => {},
  setLightTheme: () => {},
  setDarkTheme: () => {},
  setSystemTheme: () => {},
})

const useThemeMode = () => useContext(ThemeContext)

export default useThemeMode
