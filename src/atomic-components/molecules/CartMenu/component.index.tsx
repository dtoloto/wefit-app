'use client'
import React from 'react'
import { ICartMenu } from './component.types'
import { StyledCartMenu, StyledTextColumn } from './component.styles'
import { Text } from '../../atoms'
import { MdShoppingBasket } from 'react-icons/md'

export const CartMenu = ({}: ICartMenu) => {
  return (
    <StyledCartMenu>
      <StyledTextColumn>
        <Text id="my-cart" $colorSchema="white" $size="sm" $hasMargin={false} $fontWeight="600">
          Meu Carrinho
        </Text>
        <Text $colorSchema="grey1" $size="xs" $hasMargin={false} $fontWeight="600">
          0 itens
        </Text>
      </StyledTextColumn>
      <MdShoppingBasket size={32} />
    </StyledCartMenu>
  )
}
