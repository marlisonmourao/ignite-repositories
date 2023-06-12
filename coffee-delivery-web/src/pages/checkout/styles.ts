import { styled } from '@/styles'

export const CheckoutContainer = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '$background',

  padding: '0 10rem',
})

export const CheckoutContent = styled('main', {
  display: 'grid',
  gridTemplateColumns: '591px 498px',
  gap: '2rem',
})

export const FormContent = styled('div', {})

export const Form = styled('form', {
  marginTop: '15px',
  padding: '2.5rem',
  backgroundColor: '$baseCard',

  div: {
    display: 'flex',
    gap: '8px',

    svg: {
      color: '$yellowDark',
    },
  },
})

export const Title = styled('span', {
  fontFamily: 'var(--baloo2)',
  fontWeight: 'bold',
  lineHeight: '$base',
  fontSize: '$lg',
  color: '$baseSubtitle',
})

export const AddressTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
})

export const AddressText = styled('span', {
  fontFamily: 'var(--roboto)',
  fontSize: '$base',
  lineHeight: '$base',
  color: '$baseTitle',
})

export const AddressTextDescription = styled('span', {
  fontFamily: 'var(--roboto)',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$baseText',
})

export const InputWrapper = styled('div', {
  width: '100%',
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const InputWrapperRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.875rem',
})

export const ContainerCheckout = styled('div', {
  width: '100%',
  backgroundColor: '$baseCard',
  marginTop: '15px',

  borderRadius: '6px 44px',
  padding: '2.5rem',
})

export const PriceWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: '0.75rem',
})

export const Text = styled('span', {
  fontFamily: 'var(--roboto)',
  lineHeight: '$base',
  fontSize: '$md',

  variants: {
    variant: {
      alt: {
        fontWeight: 'bold',
        fontSize: '$xl',
        color: '$baseSubtitle',
      },
    },
  },
})

export const ButtonConfirm = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  padding: '0.75rem 0.5rem',
  border: 0,

  backgroundColor: '$yellow',
  borderRadius: '6px',

  textTransform: 'uppercase',
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',
  marginTop: '24px',

  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$yellowDark',
  },
})
