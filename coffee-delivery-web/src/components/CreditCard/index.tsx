import React, { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  title: string
  icon: ReactNode
}

export function CreditCard({ title, icon: Icon }: Props) {
  return (
    <Container type="button">
      <Icon size={32} />
      <span>{title}</span>
    </Container>
  )
}
