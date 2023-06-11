import { styled } from '@/styles'

export const Input = styled('input', {
  width: '100%',
  padding: '12px',
  backgroundColor: '$baseInput',
  border: '1px solid $baseButton',
  borderRadius: '4px',
  fontFamily: 'var(--roboto)',
  fontSize: '$md',

  '&:focus': {
    outline: 'none',
    borderColor: '$yellowDark',
  },

  variants: {
    varaint: {
      primary: {
        flex: 1,
      },
      secondary: {
        width: '12.5rem',
      },
      tertiary: {
        width: '3.75rem',
      },
    },
  },
  defaultVariants: {
    varaint: 'primary',
  },
})
