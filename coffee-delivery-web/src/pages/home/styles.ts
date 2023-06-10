import { styled } from '@/styles'

export const ContainerHome = styled('div', {
  height: '100vh',
  backgroundColor: '$background',
  margin: '7.875rem auto',
  padding: '0 10rem',

  '@media screen and (max-width: 768px)': {
    padding: '0 2rem',
  },
})

export const Hero = styled('main', {
  maxWidth: 1200,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  margin: '0 auto',
  backgroundImage:
    'linear-gradient(to bottom, rgba(235, 193, 54, 0.15), rgba(128, 71, 248, 0.15))',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  '@media screen and (max-width: 768px)': {
    padding: '0 2rem',
  },
})

export const InfoWrapper = styled('div', {
  h1: {
    fontSize: '$huge',
    fontFamily: 'var(--baloo2)',
    lineHeight: '$base',
    maxWidth: '36.75rem',
    marginBottom: '1rem',

    '@media screen and (max-width: 768px)': {
      fontSize: '$large',
    },
  },

  p: {
    fontFamily: 'var(--roboto)',
    fontSize: '$lg',
    lineHeight: '$base',

    '@media screen and (max-width: 768px)': {
      fontSize: '$md',
    },
  },
})

export const ContainerImage = styled('div', {
  '> :not(img)': {
    display: 'block',
  },

  '@media screen and (max-width: 768px)': {
    display: 'none',
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
  paddingBottom: '5rem',

  '@media screen and (max-width: 768px)': {
    padding: '0 2rem',
  },
})

export const ProductsItems = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '2rem',

  '@media screen and (max-width: 768px)': {
    gridTemplateColumns: '1fr 1fr',
  },
})

export const Label = styled('h2', {
  fontFamily: 'var(--baloo2)',
  fontWeight: '800',
  fontSize: '$xxxl',
  marginBottom: '3.375rem',

  '@media screen and (max-width: 768px)': {
    fontSize: '$xxl',
    marginBottom: '3.375rem',
  },
})
