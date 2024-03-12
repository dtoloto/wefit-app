'use client'
import React from 'react'
import { ICartMenu } from './component.types'
import { StyledCartMenu, StyledTextColumn } from './component.styles'
import { Text } from '../../atoms'
import { MdShoppingBasket } from 'react-icons/md'
import Link from 'next/link'
import { useCart } from '@/context/CartProvider'

export const CartMenu = ({}: ICartMenu) => {
  const { cartItems } = useCart()
  return (
    <Link href="/carrinho">
      <StyledCartMenu>
        <StyledTextColumn>
          <Text id="my-cart" $colorSchema="white" $size="sm" $hasMargin={false} $fontWeight="600">
            Meu Carrinho
          </Text>
          <Text $colorSchema="grey1" $size="xs" $hasMargin={false} $fontWeight="600">
            {`${cartItems.length} itens`}
          </Text>
        </StyledTextColumn>
        <MdShoppingBasket size={32} />
      </StyledCartMenu>
    </Link>
  )
}
