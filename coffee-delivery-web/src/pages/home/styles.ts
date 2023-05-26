import { styled } from '@/styles'

export const ContainerHome = styled('div', {
  flex: 1,
  height: '100vh',
  backgroundColor: '$background',
})

export const Hero = styled('main', {
  width: '100%',
  padding: '5.875rem 10rem',

  h1: {
    fontSize: '$huge',
    fontFamily: 'var(--baloo2)',
    lineHeight: '$base',

    width: '36.75rem',
  },
})
