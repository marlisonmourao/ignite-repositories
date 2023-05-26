import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  getCssText,
  keyframes,
  theme,
  createTheme,
  globalCss,
} = createStitches({
  theme: {
    colors: {
      yellowDark: '#C47F17',
      yellowLight: '#F1E9C9',
      yellow: '#DBAC2C',

      purpleDark: '#4B2995',
      purple: '#8047F8',
      purpleLight: '#EBE5F9',

      baseTitle: '#272221',
      baseSubtitle: '#403937',
      baseText: '#574F4D',
      baseLabel: '#8D8686',

      baseHover: '#D7D5D5',
      baseButton: '#E6E5E5',
      baseInput: '#EDEDED',
      baseCard: '#F3F2F2',

      background: '#FAFAFA',
      white: '#FFFFFF',
    },

    fontSizes: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      xxxl: '2rem',
      huge: '3rem',
    },

    lineHeights: {
      base: '130%',
      alt: '160%',
    },
  },
} as const)
