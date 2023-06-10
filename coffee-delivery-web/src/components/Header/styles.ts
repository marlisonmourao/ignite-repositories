import { styled } from '@/styles'
import Link from 'next/link'

export const ContainerHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 11rem',
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

export const LocationIcon = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$purpleLight',
  color: '$purpleDark',

  padding: '0.5rem',
  gap: '4px',
  borderRadius: 6,

  fontFamily: 'var(--roboto)',

  '&:hover': {
    backgroundColor: '#EBE5F9',
  },
})

export const IconWrapper = styled(Link, {
  padding: '0.5rem',
  backgroundColor: '$yellowLight',
  borderRadius: 6,

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$yellowDark',
  },
})

export const Notification = styled('div', {
  width: '1.25rem',
  height: '1.25rem',
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: '$yellowDark',

  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',

  fontFamily: 'var(--roboto)',
  fontWeight: 'bold',
  fontSize: '$sm',
  color: '$white',

  top: '-8px',
  right: '-8.35px',

  span: {
    marginTop: '2px',
  },
})
