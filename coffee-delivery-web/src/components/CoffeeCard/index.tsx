import {
  Actions,
  ActionsButtons,
  ButtonIconShopping,
  Buy,
  CoffeeContainer,
  CoffeeTag,
  Description,
  Price,
  Title,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'lucide-react'

export interface CoffeeDataProps {
  id: number
  image: string
  tag: string
  title: string
  description: string
}

interface Props {
  data: CoffeeDataProps
}

export function CoffeeCard({ data }: Props) {
  return (
    <CoffeeContainer>
      <img src={`/products/${data.image}`} alt="" width={120} height={120} />

      <CoffeeTag>{data.tag}</CoffeeTag>

      <Title>{data.title}</Title>

      <Description>{data.description}</Description>

      <Buy>
        <Price>
          <span>R$</span> 9,90
        </Price>

        <Actions>
          <ActionsButtons>
            <button>
              <Minus size={14} />
            </button>

            <span>1</span>

            <button>
              <Plus size={14} />
            </button>
          </ActionsButtons>

          <ButtonIconShopping>
            <ShoppingCart size={22} color="#FFFFFF" fill="#FFFFFF" />
          </ButtonIconShopping>
        </Actions>
      </Buy>
    </CoffeeContainer>
  )
}
