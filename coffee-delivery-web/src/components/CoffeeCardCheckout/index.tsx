import Image from 'next/image'
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

import CoffeeImage from '../../assets/CoffeImg.png'

export function CoffeeCardCheckout() {
  return (
    <Container>
      <CoffeeSelectContainer>
        <Image src={CoffeeImage} alt="" />

        <Details>
          <Title>Expresso Tradicional</Title>
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

            <ActionsButtonRemove>
              <Trash2 size={11} />
              <span>REMOVER</span>
            </ActionsButtonRemove>
          </Counter>
        </Details>
        <Price>R$ 9,90</Price>
      </CoffeeSelectContainer>

      <Separator />
    </Container>
  )
}
