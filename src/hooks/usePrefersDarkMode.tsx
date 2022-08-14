import { useMedia } from './useMediaQuery'

export function usePrefersDarkMode() {
  return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false)
}
