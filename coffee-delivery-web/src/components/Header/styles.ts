import { styled } from '@/styles'

export const ContainerHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 11rem',
  minWidth: '1440px',
  margin: '0 auto',
})

export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

export const Location = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const LocationIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$purpleLight',
  color: '$purpleDark',

  padding: '0.5rem',
  gap: '4px',
  borderRadius: 6,

  fontFamily: 'var(--roboto)',
})

export const IconWrapper = styled('div', {
  padding: '0.5rem',
  backgroundColor: '$yellowLight',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$yellowDark',
  },
})
