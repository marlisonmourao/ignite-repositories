import { styled } from '@/styles'

export const ContainerIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

export const IconWrapper = styled('div', {
  width: '2rem',
  height: '2rem',
  borderRadius: '9999px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: '$base',
    lineHeight: '$base',
    color: '$baseText',
    fontFamily: 'var(--roboto)',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$yellowDark',
      },
      secondary: {
        backgroundColor: '$yellow',
      },
      tertiary: {
        backgroundColor: '$baseText',
      },
      quaternary: {
        backgroundColor: '$purple',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'primary',
  },
})
