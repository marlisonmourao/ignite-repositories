import { styled } from '@/styles'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: '6px',
  padding: '1rem',
  gap: '12px',

  backgroundColor: '$baseButton',

  '&:hover': {
    backgroundColor: '$baseHover',
  },

  border: '1px solid transparent',

  '&:active': {
    backgroundColor: 'transparent',
    border: '1px solid $purple',
  },

  span: {
    fontFamily: 'var(--roboto)',
    fontSize: '$sm',
    textTransform: 'uppercase',
    color: '$baseText',
    lineHeight: '$alt',
  },
})
