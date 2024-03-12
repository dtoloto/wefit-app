'use client'
import { ICartItem } from '@/types/cart'
import { IProduct } from '@/types/product'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'

interface ICartProviderContext {
  cartItems: ICartItem[]
  addItem: (item: IProduct, quantity: number) => void
  removeItem: (id: number) => void
  resetCart: () => void
  findItem: (id: number) => ICartItem | undefined
}

const CartContext = createContext<ICartProviderContext>({} as ICartProviderContext)

interface ICartProvider {
  children: ReactNode
}

export const CartProvider = ({ children }: ICartProvider) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  useEffect(() => {
    const cart = localStorage.getItem('wefit:cart')
    if (cart) {
      setCartItems(JSON.parse(cart))
    }
    setHasLoaded(true)
  }, [])

  useEffect(() => {
    if (hasLoaded) localStorage.setItem('wefit:cart', JSON.stringify(cartItems))
  }, [cartItems, hasLoaded])

  const addItem = (item: IProduct, quantity: number) => {
    if (quantity <= 0) return
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const resetCart = () => {
    setCartItems([])
  }

  const findItem = (id: number) => {
    return cartItems.find((item) => item.id === id)
  }

  const value = { cartItems, addItem, removeItem, resetCart, findItem }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw Error('CartContext not found')
  }

  return context
}
