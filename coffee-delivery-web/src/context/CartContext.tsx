import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeeDataProps } from '@/dtos/cardCoffeProps'
import { produce } from 'immer'

interface CartItem extends CoffeeDataProps {
  quantity: number
}
interface CartContextProps {
  numberNotification: number
  addCart: (coffeeData: CartItem) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [dataCoffeeCard, setDataCoffeeCard] = useState<CartItem[]>([])

  async function loadDataCoffee() {
    try {
      const data = await localStorage.getItem('coffeeCard')

      if (data) {
        const parse = JSON.parse(data)

        await setDataCoffeeCard(parse)
      }
    } catch (error) {
      console.log(error)
    }
  }

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

      setDataCoffeeCard(newCart)
    })
  }

  const numberNotification = dataCoffeeCard.length

  useEffect(() => {
    loadDataCoffee()
  }, [])

  return (
    <CartContext.Provider
      value={{
        numberNotification,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
