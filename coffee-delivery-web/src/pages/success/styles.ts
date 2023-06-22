import { styled } from '@/styles'

export const ContainerCheckout = styled('div', {
  backgroundColor: '$background',
  padding: '2rem 11rem',
})

export const Title = styled('h2', {
  fontSize: '$xxxl',
  fontFamily: 'var(--baloo2)',
  fontWeight: '800',
  lineHeight: '$base',
  color: '$yellowDark',
})

export const Label = styled('label', {
  fontSize: '$xl',
  fontFamily: 'var(--roboto)',
  lineHeight: '$base',
})

export const ContainerOrderInfo = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',

  gap: '102px',
})

export const OrderInfo = styled('div', {
  padding: '2.5rem',
  width: '526px',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  borderRadius: '6px 36px',
  border: '2px solid',
  borderColor: 'hsla(44, 71%, 52%, 1) hsla(259, 93%, 63%, 1)',
  marginTop: '40px',
})

export const InforContainer = styled('div', {
  display: 'flex',
  gap: '12px',

  'div:first-child': {
    width: '2rem',
    height: '2rem',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$purple',
  },

  p: {
    width: 340,
  },

  span: {
    fontFamily: 'var(--roboto)',
    fontWeight: 'bold',
    fontSize: 'base',
  },

  variants: {
    variant: {
      primary: {
        'div:first-child': {
          backgroundColor: '$yellow',
        },
      },
      secondary: {
        'div:first-child': {
          backgroundColor: '$yellowDark',
        },
      },
    },
  },
})

export const ImageSuccessContainer = styled('div', {})
