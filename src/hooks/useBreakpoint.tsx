import { useState } from 'react'
import { useMedia } from './useMedia'
import breakpoints from '../helpers/breakpoints.config.json'

export function useBreakpoint(bk: keyof typeof breakpoints) {
  const [values] = useState(() => {
    const newBreakpoints = {
      ...breakpoints,
    }

    let k: keyof typeof breakpoints
    for (k in breakpoints) {
      newBreakpoints[k] = `(min-width: ${newBreakpoints[k]})`
    }

    return newBreakpoints
  })

  const value = useMedia<boolean>([values[bk]], [true], false)

  return { isUpBreakpoint: value }
}
