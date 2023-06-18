import React from 'react'
import { LucideProps } from 'lucide-react'

import { Container } from './styles'

interface Props {
  title: string
  icon: React.ComponentType<LucideProps>
}

export function CardCreditCard({ title, icon: Icon }: Props) {
  return (
    <Container type="button">
      <Icon color="#8047F8" />
      <span>{title}</span>
    </Container>
  )
}
