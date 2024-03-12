'use client'
import React, { useEffect, useState } from 'react'
import { IProductCard } from './component.types'
import { Button, Card, Text } from '../../atoms'
import Image from 'next/image'
import { StyledButtonContent, StyledProductCard } from './component.styles'
import { MdAddShoppingCart } from 'react-icons/md'
import { useCart } from '@/context/CartProvider'
import { formatCurrency } from '@/utils/formatCurreny'

export const ProductCard = ({ product }: IProductCard) => {
  const { image, price, title, id } = product
  const { findItem, addItem, removeItem } = useCart()

  const [formattedPrice, setformattedPrice] = useState<string>()

  useEffect(() => {
    setformattedPrice(
      formatCurrency({
        amount: price,
        minimumFractionDigits: 2
      })
    )
  }, [price])

  const item = findItem(id)
  const quantity = item ? item.quantity : 0

  const handleClick = () => {
    if (quantity === 0) {
      addItem(product, 1)
      return
    }

    removeItem(id)
  }

  const buttonLabel = () => {
    switch (quantity) {
      case 0:
        return 'Adicionar ao Carrinho'
      case 1:
        return 'Item Adicionado'
      default:
        return 'Itens Adicionados'
    }
  }

  return (
    <Card>
      <StyledProductCard>
        <Image alt={title} src={image} width={147} height={188} />
        <Text $size="xs" $colorSchema="grey2" $hasMargin={false}>
          {title}
        </Text>
        {!!formattedPrice && <Text $size="md">{formattedPrice}</Text>}

        <Button
          id={id}
          $block
          $colorSchema={quantity > 0 ? 'secondary' : 'primary'}
          onClick={handleClick}>
          <StyledButtonContent>
            <div>
              <MdAddShoppingCart size={14} />
              <span>{quantity}</span>
            </div>
            {buttonLabel()}
          </StyledButtonContent>
        </Button>
      </StyledProductCard>
    </Card>
  )
}
