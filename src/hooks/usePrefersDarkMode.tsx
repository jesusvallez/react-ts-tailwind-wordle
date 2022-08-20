import { useMedia } from './useMedia'

export function usePrefersDarkMode() {
  return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false)
}
