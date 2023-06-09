import { styled } from '@/styles'
import Link from 'next/link'

export const ContainerHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$background',
  padding: '2rem 11rem',
  position: 'sticky',

  top: 0,
  left: 0,
  zIndex: 5,
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

export const IconWrapper = styled('div', {
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

  top: 'calc(-1.25rem / 2)',
  right: 'calc(-1.25rem / 2)',

  span: {
    marginTop: '2.50px',
  },
})
