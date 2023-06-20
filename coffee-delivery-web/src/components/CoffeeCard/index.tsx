import { useCartContext } from '@/context/useCartContex'
import { CoffeeContainer, CoffeeTag, Description, Title } from './styles'

import { useState } from 'react'
import { PriceActions } from '../PriceActions'
import { formatMoney } from '@/utils/formatMoney'

export interface CoffeeDataProps {
  id: string
  image: string
  tag: string
  title: string
  description: string
  price: number
}

interface Props {
  data: CoffeeDataProps
}

export function CoffeeCard({ data }: Props) {
  const [quantity, setQuantity] = useState(1)

  const { addCart } = useCartContext()

  function handleAddCart() {
    const newDataCoffe = {
      ...data,
      quantity,
    }

    addCart(newDataCoffe)
  }

  function handleOnDecrease() {
    setQuantity((prev) => prev - 1)
  }

  function handleOnIncrease() {
    setQuantity((prev) => prev + 1)
  }

  return (
    <CoffeeContainer>
      <img src={`/products/${data.image}`} alt="" width={120} height={120} />

      <CoffeeTag>{data.tag}</CoffeeTag>

      <Title>{data.title}</Title>

      <Description>{data.description}</Description>

      <PriceActions
        price={formatMoney(data.price)}
        quantity={quantity}
        onAddToCard={handleAddCart}
        onDecrease={handleOnDecrease}
        onIncrease={handleOnIncrease}
      />
    </CoffeeContainer>
  )
}
