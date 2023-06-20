import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeeDataProps } from '@/dtos/cardCoffeProps'
import { produce } from 'immer'

interface CartItem extends CoffeeDataProps {
  quantity: number
}
interface CartContextProps {
  numberNotification: number
  addCart: (coffeeData: CartItem) => void
  changeCartChangeItem: (
    coffeeId: string,
    type: 'increase' | 'decrease',
  ) => void
  dataCoffeeCard: CartItem[]
  setDataCoffeeCard: React.Dispatch<React.SetStateAction<CartItem[]>>
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [dataCoffeeCard, setDataCoffeeCard] = useState<CartItem[]>([])
  const numberNotification = dataCoffeeCard.length

  function addCart(coffeeData: CartItem) {
    const coffeeAlreadyExists = dataCoffeeCard.findIndex(
      (item) => item.id === coffeeData.id,
    )

    const newCart = produce(dataCoffeeCard, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(coffeeData)
      } else {
        draft[coffeeAlreadyExists].quantity += coffeeData.quantity
      }
    })
    setDataCoffeeCard(newCart)

    if (dataCoffeeCard) {
      localStorage.setItem(
        'coffeeDelivery:dataCoffeeCard',
        JSON.stringify(newCart),
      )
    }
  }

  function changeCartChangeItem(
    coffeeId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(dataCoffeeCard, (draft) => {
      const product = dataCoffeeCard.findIndex((item) => item.id === coffeeId)

      if (product >= 0) {
        const item = draft[product]
        draft[product].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    localStorage.setItem(
      'coffeeDelivery:dataCoffeeCard',
      JSON.stringify(newCart),
    )
    setDataCoffeeCard(newCart)
  }

  async function loadDataCoffee() {
    try {
      const data = await localStorage.getItem('coffeeDelivery:dataCoffeeCard')

      if (data) {
        const parse = JSON.parse(data)

        await setDataCoffeeCard(parse)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadDataCoffee()
  }, [])

  return (
    <CartContext.Provider
      value={{
        numberNotification,
        addCart,
        dataCoffeeCard,
        setDataCoffeeCard,
        changeCartChangeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
