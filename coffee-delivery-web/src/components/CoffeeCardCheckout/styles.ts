import { styled } from '@/styles'

export const Container = styled('div', {})

export const CoffeeSelectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',

  position: 'relative',

  img: {
    width: '4rem',
    height: '4rem',
  },
})

export const Details = styled('div', {
  span: {
    fontFamily: 'var(--roboto)',
    fontSize: '$base',
    lineHeight: '$base',
    color: '$baseSubtitle',
  },
})

export const Title = styled('h2', {
  fontFamily: 'var(--roboto)',
  fontWeight: 'normal',
  lineHeight: '$base',
  fontSize: '$base',
  color: '$baseSubtitle',

  marginBottom: '8px',
})

export const Counter = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
})

export const ActionsButton = styled('div', {
  display: 'flex',
  gap: '8px',
  padding: '6px',
  borderRadius: '6px',

  backgroundColor: '$baseButton',

  span: {
    fontFamily: 'var(--roboto)',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$baseText',
  },

  button: {
    border: 0,
    color: '$purple',
    backgroundColor: 'transparent',

    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export const ActionsButtonRemove = styled('a', {
  display: 'flex',
  gap: '4px',
  padding: '6px',
  borderRadius: '6px',
  alignItems: 'center',

  backgroundColor: '$baseButton',

  span: {
    fontFamily: 'var(--roboto)',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$baseText',
  },

  border: 0,
  color: '$purple',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$baseHover',
  },
})

export const Price = styled('p', {
  fontFamily: 'var(--roboto)',
  fontWeight: 'bold',
  fontSize: '$base',
  lineHeight: '$base',
  color: '$baseText',

  position: 'absolute',
  top: '12px',
  right: '4px',
})

export const Separator = styled('div', {
  width: '100%',
  height: '1px',
  backgroundColor: '$baseButton',
  margin: '1.5rem 0',
})
