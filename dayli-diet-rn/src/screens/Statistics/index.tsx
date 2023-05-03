import {
  Container,
  Content,
  Label,
  Main,
  NumberSequence,
  Sequence,
  Title,
} from './styles'

import { PorcentCard } from '@components/PorcentCard'
import { SuccessOrFailedCard } from '@components/SuccessOrFailedCard'

export function Statistics() {
  return (
    <Container>
      <PorcentCard porcent="43" success variant="secondary" />

      <Main>
        <Title>Estatísticas gerais</Title>

        <Sequence>
          <NumberSequence>4</NumberSequence>
          <Label>melhor sequência de pratos dentro da dieta</Label>
        </Sequence>

        <Sequence>
          <NumberSequence>109</NumberSequence>
          <Label>refeições registradas</Label>
        </Sequence>

        <Content>
          <SuccessOrFailedCard
            numberOfMeals="32"
            mealsLabel="refeições dentro da dieta"
          />
          <SuccessOrFailedCard
            numberOfMeals="77"
            mealsLabel="refeições fora da dieta"
            variant="failed"
          />
        </Content>
      </Main>
    </Container>
  )
}
