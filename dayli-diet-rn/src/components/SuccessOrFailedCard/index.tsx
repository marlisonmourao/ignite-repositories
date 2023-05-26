import { Container, Label, Number, SuccessOrFailedColor } from './styles'

type Props = {
  variant?: SuccessOrFailedColor
  numberOfMeals: number
  mealsLabel: string
}

export function SuccessOrFailedCard({
  variant = 'success',
  mealsLabel,
  numberOfMeals,
}: Props) {
  return (
    <Container color={variant}>
      <Number>{numberOfMeals}</Number>
      <Label>{mealsLabel}</Label>
    </Container>
  )
}
