import { PorcentCard } from '@components/PorcentCard'
import { Container } from './styles'

export function Statistics() {
  return (
    <Container>
      <PorcentCard porcent="43" success variant="secondary" />
    </Container>
  )
}
