import { globalCss } from '../styles/index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
})
