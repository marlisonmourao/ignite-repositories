import { Minus, Plus, Trash2 } from 'lucide-react'
import {
  ActionsButton,
  ActionsButtonRemove,
  CoffeeSelectContainer,
  Container,
  Counter,
  Details,
  Price,
  Separator,
  Title,
} from './styles'

interface Props {
  banner: string
  title: string
  price: string
  quantity: number
  onRemove: () => void
  onIncreased: () => void
  onDecreased: () => void
}

export function CoffeeCardCheckout({
  banner,
  price,
  title,
  quantity,
  onRemove,
  onDecreased,
  onIncreased,
}: Props) {
  return (
    <Container>
      <CoffeeSelectContainer>
        <img src={`/products/${banner}`} width={80} height={80} alt="" />

        <Details>
          <Title>{title}</Title>
          <Counter>
            <ActionsButton>
              <button disabled={quantity <= 1} onClick={onDecreased}>
                <Minus size={11} />
              </button>
              <span>{quantity}</span>
              <button onClick={onIncreased}>
                <Plus size={11} />
              </button>
            </ActionsButton>

            <ActionsButtonRemove onClick={onRemove}>
              <Trash2 size={11} />
              <span>REMOVER</span>
            </ActionsButtonRemove>
          </Counter>
        </Details>
        <Price>R$ {price}</Price>
      </CoffeeSelectContainer>

      <Separator />
    </Container>
  )
}
