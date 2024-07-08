// from https://gist.github.com/mjackson/05673df9963dd18a7ef6ccc035f07cf0

import React from 'react'

export type ColorScheme = 'light' | 'dark'

export default function useColorSchemePreference(
  defaultColorScheme: ColorScheme = 'light',
) {
  const darkQuery = '(prefers-color-scheme: dark)'
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    typeof window === 'object' && window.matchMedia
      ? window.matchMedia(darkQuery).matches
        ? 'dark'
        : 'light'
      : defaultColorScheme,
  )

  React.useEffect(() => {
    function handleChange(event: MediaQueryListEvent) {
      setColorScheme(event.matches ? 'dark' : 'light')
    }

    if (window.matchMedia) {
      const mql = window.matchMedia(darkQuery)
      mql.addEventListener('change', handleChange)
      return () => {
        mql.removeEventListener('change', handleChange)
      }
    }
  }, [])

  return colorScheme
}
