import { styled } from '@/styles'

export const ContainerHome = styled('div', {
  height: '100vh',
  backgroundColor: '$background',

  margin: '7.875rem auto',
  padding: '0 10rem',
})

export const Hero = styled('main', {
  maxWidth: 1200,

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  margin: '0 auto',
})

export const InfoWrapper = styled('div', {
  h1: {
    fontSize: '$huge',
    fontFamily: 'var(--baloo2)',
    lineHeight: '$base',

    width: '36.75rem',
    marginBottom: '1rem',
  },

  p: {
    fontFamily: 'var(--roboto)',
    fontSize: '$lg',
    lineHeight: '$base',
  },
})

export const ItemsWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.875rem',

  marginTop: '4.125rem',
})

export const Products = styled('div', {
  maxWidth: 1200,
  margin: '0 auto',
  marginTop: '3.5rem',
})

export const ProductsItems = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr  1fr 1fr 1fr',
  gap: '2rem',
})

export const Label = styled('h2', {
  fontFamily: 'var(--baloo2)',
  fontWeight: '800',
  fontSize: '$xxxl',

  marginBottom: '3.375rem',
})
