import {
  Actions,
  ActionsButtons,
  ButtonIconShopping,
  Buy,
  Price,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'lucide-react'

interface PriceActionsProps {
  onIncrease: () => void
  onDecrease: () => void
  onAddToCard: () => void
  quantity: number
  price: string
}

export function PriceActions({
  onDecrease,
  onIncrease,
  quantity,
  onAddToCard,
  price,
}: PriceActionsProps) {
  return (
    <Buy>
      <Price>
        <span>R$</span> {price}
      </Price>

      <Actions>
        <ActionsButtons>
          <button disabled={quantity <= 1} onClick={onDecrease}>
            <Minus size={14} />
          </button>

          <span style={{ marginTop: -4 }}>{quantity}</span>

          <button onClick={onIncrease}>
            <Plus size={14} />
          </button>
        </ActionsButtons>

        <ButtonIconShopping onClick={onAddToCard}>
          <ShoppingCart size={22} color="#FFFFFF" fill="#FFFFFF" />
        </ButtonIconShopping>
      </Actions>
    </Buy>
  )
}
