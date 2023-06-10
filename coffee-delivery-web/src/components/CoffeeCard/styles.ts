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
