import { useState } from 'react'
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

import { useCartContext } from '@/context/useCartContex'

import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { CoffeeDataProps } from '@/dtos/cardCoffeProps'

interface Props {
  data: CoffeeDataProps
}

export function CoffeeCard({ data }: Props) {
  const [numberProduct, setNumberProduct] = useState(1)

  const { setDataCoffeeCard } = useCartContext()

  function handleAdd() {
    setNumberProduct((prev) => prev + 1)
  }

  function handleMinus() {
    if (numberProduct <= 1) {
      return
    }

    setNumberProduct((prev) => prev - 1)
  }

  function handleAddCart() {
    const dataCoffe = {
      ...data,
      numberProduct,
    }
    setDataCoffeeCard((prev) => [...prev, dataCoffe])
  }

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
            <button onClick={() => handleMinus()}>
              <Minus size={14} />
            </button>

            <span style={{ marginTop: -5 }}>{numberProduct}</span>

            <button onClick={() => handleAdd()}>
              <Plus size={14} />
            </button>
          </ActionsButtons>

          <ButtonIconShopping onClick={() => handleAddCart()}>
            <ShoppingCart size={22} color="#FFFFFF" fill="#FFFFFF" />
          </ButtonIconShopping>
        </Actions>
      </Buy>
    </CoffeeContainer>
  )
}
