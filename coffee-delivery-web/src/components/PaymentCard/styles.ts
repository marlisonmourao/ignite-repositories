import { styled } from '@/styles'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: '6px',
  padding: '1rem',
  gap: '12px',

  backgroundColor: '$baseButton',

  '&:hover': {
    backgroundColor: '$baseHover',
  },

  border: '1px solid transparent',

  variants: {
    isActive: {
      true: {
        backgroundColor: '$purpleLight',
        border: '1px solid $purple',
        boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      false: {
        // Estilos para quando o componente não está ativo
        // Por exemplo, backgroundColor, border, etc.
      },
    },
  },

  span: {
    fontFamily: 'var(--roboto)',
    fontSize: '$sm',
    textTransform: 'uppercase',
    color: '$baseText',
    lineHeight: '$alt',
  },
})
