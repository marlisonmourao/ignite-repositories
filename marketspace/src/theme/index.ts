import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    blue: {
      700: '#364D9D',
      400: '#647AC7',
      100: ' rgba(100, 122, 199, 0.1)',
    },

    red: {
      500: '#EE7979',
    },

    gray: {
      100: '#1A181B',
      200: '#3E3A40',
      300: '#5F5B62',
      400: '#9F9BA1',
      500: '#D9D8DA',
      600: '#EDECEE',
      700: '#F7F7F8',
    },

    white: '#FFFFFF',
  },
  fonts: {
    bold: 'Karla_700Bold',
    regular: 'Karla_400Regular',
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
  },

  lineHeights: {
    md: '1.3em',
  },

  sizes: {
    14: 56,
    17: 72,
    25: 100,
    33: 136,
    34: 152,
  },
})
