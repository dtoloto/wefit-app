'use client'
import React, { useEffect, useState } from 'react'
import { IProductCard } from './component.types'
import { Button, Card, Text } from '../../atoms'
import Image from 'next/image'
import { StyledButtonContent, StyledProductCard } from './component.styles'
import { MdAddShoppingCart } from 'react-icons/md'
import { useCart } from '@/context/CartProvider'

export const ProductCard = ({ product }: IProductCard) => {
  const { image, price, title, id } = product
  const { findItem, addItem } = useCart()

  const item = findItem(id)
  const quantity = item ? item.quantity : 0

  return (
    <Card>
      <StyledProductCard>
        <Image alt={title} src={image} width={147} height={188} />
        <Text $size="xs" $colorSchema="grey2" $hasMargin={false}>
          {title}
        </Text>
        <Text $size="md">{`R$ ${price.toString()}`}</Text>
        <Button
          $block
          $colorSchema={quantity > 0 ? 'secondary' : 'primary'}
          onClick={() => addItem(product, 1)}>
          <StyledButtonContent>
            <div>
              <MdAddShoppingCart size={14} />
              <span>{quantity}</span>
            </div>
            {quantity > 0 ? 'Item Adicionado' : 'Adicionar ao Carrinho'}
          </StyledButtonContent>
        </Button>
      </StyledProductCard>
    </Card>
  )
}
