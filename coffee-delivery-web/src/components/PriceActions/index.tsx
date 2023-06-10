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
}

export function PriceActions({
  onDecrease,
  onIncrease,
  quantity,
  onAddToCard,
}: PriceActionsProps) {
  return (
    <Buy>
      <Price>
        <span>R$</span> 9,90
      </Price>

      <Actions>
        <ActionsButtons>
          <button onClick={onDecrease}>
            <Minus size={14} />
          </button>

          <span style={{ marginTop: -1 }}>{quantity}</span>

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
