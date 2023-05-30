import { styled } from '@/styles'

export const CoffeeContainer = styled('div', {
  backgroundColor: '$baseCard',
  width: '16rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '0 1.375rem',
  borderRadius: 6,
})

export const CoffeeTag = styled('div', {
  padding: '4px 8px',
  backgroundColor: '$yellowLight',
  color: '$yellowDark',
  marginTop: '12px',

  textTransform: 'uppercase',
  borderRadius: '9999px',

  fontFamily: 'var(--roboto)',
  fontWeight: 'bold',
  lineHeight: '$base',
  fontSize: '$xs',
})

export const Title = styled('h3', {
  fontFamily: 'var(--baloo2)',
  fontWeight: 'bold',
  lineHeight: '$base',
  color: '$baseTitle',
  fontSize: '$xl',

  marginTop: '16px',
})

export const Description = styled('p', {
  fontFamily: 'var(--roboto)',
  lineHeight: '$base',
  fontSize: '$sm',
  color: '$baseLabel',
  marginTop: '8px',

  textAlign: 'center',
})

export const Buy = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '1.4375rem',

  marginTop: '2rem',
  alignItems: 'center',
  paddingBottom: '1.25rem',
})

export const Price = styled('p', {
  fontFamily: 'var(--baloo2)',
  fontSize: '$xl',
  color: '$baseText',
  lineHeight: '$base',
  fontWeight: '800',

  span: {
    fontFamily: 'var(--roboto)',
    fontWeight: 'normal',
    fontSize: '$md',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  gap: '8px',
})

export const ActionsButtons = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '8px',
  borderRadius: '6px',

  backgroundColor: '$baseButton',

  span: {
    color: '$baseText',
    lineHeight: '$base',
    fontFamily: 'var(--roboto)',
    fontSize: '$base',
  },

  button: {
    textDecoration: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    color: '$purple',

    cursor: 'pointer',
  },
})

export const ButtonIconShopping = styled('a', {
  width: '2.375rem',
  height: '2.375rem',

  borderRadius: '6px',
  backgroundColor: '$purpleDark',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all .2s',

  '&:hover': {
    backgroundColor: '$purple',
  },
})
