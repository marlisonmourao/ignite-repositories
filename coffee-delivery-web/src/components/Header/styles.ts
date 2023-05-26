import { styled } from '@/styles'

export const ContainerHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 10rem',
})

export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

export const Location = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  gap: '0.5rem',

  backgroundColor: '$purpleLight',
  color: '$purpleDark',

  fontFamily: 'var(--roboto)',
})
