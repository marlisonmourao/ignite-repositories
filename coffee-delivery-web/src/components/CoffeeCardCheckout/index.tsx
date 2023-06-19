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
  onRemove: () => void
}

export function CoffeeCardCheckout({ banner, price, title, onRemove }: Props) {
  return (
    <Container>
      <CoffeeSelectContainer>
        <img src={`/products/${banner}`} width={80} height={80} alt="" />

        <Details>
          <Title>{title}</Title>
          <Counter>
            <ActionsButton>
              <button>
                <Minus size={11} />
              </button>
              <span>1</span>
              <button>
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
