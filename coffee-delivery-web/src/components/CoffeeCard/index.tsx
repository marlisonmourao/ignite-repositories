import { useState } from 'react'
import { CoffeeContainer, CoffeeTag, Description, Title } from './styles'

import { useCartContext } from '@/context/useCartContex'

import { CoffeeDataProps } from '@/dtos/cardCoffeProps'
import { PriceActions } from '../PriceActions'

interface Props {
  data: CoffeeDataProps
}

export function CoffeeCard({ data }: Props) {
  const { addCart } = useCartContext()
  const [quantity, setQuantity] = useState(1)

  function handleAddToCart() {
    const productCoffee = {
      ...data,
      quantity: 1,
    }

    addCart(productCoffee)
  }

  function handleIncrease() {
    setQuantity((prev) => prev + 1)
  }

  function handleDecrease() {
    if (quantity === 1) {
      return
    }

    setQuantity((prev) => prev - 1)
  }

  return (
    <CoffeeContainer>
      <img src={`/products/${data.image}`} alt="" width={120} height={120} />

      <CoffeeTag>{data.tag}</CoffeeTag>

      <Title>{data.title}</Title>

      <Description>{data.description}</Description>

      <PriceActions
        onAddToCard={handleAddToCart}
        onDecrease={handleDecrease}
        quantity={quantity}
        onIncrease={handleIncrease}
      />
    </CoffeeContainer>
  )
}
