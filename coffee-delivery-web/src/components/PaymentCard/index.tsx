import React from 'react'
import { LucideProps } from 'lucide-react'

import { Container } from './styles'

interface Props {
  title: string
  icon: React.ComponentType<LucideProps>
  isActive?: boolean
  OnCreditCard?: (title: string) => void
}

export function PaymentCard({
  title,
  icon: Icon,
  isActive = false,
  OnCreditCard,
}: Props) {
  const handleClick = () => {
    if (OnCreditCard) {
      OnCreditCard(title)
    }
  }

  return (
    <Container type="button" isActive={isActive} onClick={handleClick}>
      <Icon color="#8047F8" />
      <span>{title}</span>
    </Container>
  )
}
