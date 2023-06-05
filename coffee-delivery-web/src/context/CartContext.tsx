import React, { createContext, ReactNode, useState } from 'react'
import { CoffeeDataProps } from '@/dtos/cardCoffeProps'

interface CartContextProps {
  dataCoffeeCard: CoffeeDataProps[]
  setDataCoffeeCard: React.Dispatch<React.SetStateAction<CoffeeDataProps[]>>
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [dataCoffeeCard, setDataCoffeeCard] = useState<CoffeeDataProps[]>([])

  if (dataCoffeeCard.length > 0) {
    localStorage.setItem('coffeeCard', JSON.stringify(dataCoffeeCard))
  }

  return (
    <CartContext.Provider value={{ dataCoffeeCard, setDataCoffeeCard }}>
      {children}
    </CartContext.Provider>
  )
}
