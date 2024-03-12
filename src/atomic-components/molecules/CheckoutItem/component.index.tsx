'use client'
import React, { useEffect, useState } from 'react'
import { ICheckoutItem } from './component.types'
import {
  StyledCheckoutItem,
  StyledColumnFive,
  StyledColumnFour,
  StyledColumnOne,
  StyledColumnThree,
  StyledColumnTwo,
  StyledColumnZero,
  StyledImageWrapper
} from './component.styles'
import Image from 'next/image'
import { MdDelete } from 'react-icons/md'
import { Text } from '@/atomic-components/atoms'
import { formatCurrency } from '@/utils/formatCurreny'
import { useCart } from '@/context/CartProvider'

export const CheckoutItem = ({ product: { id, image, price, title, quantity } }: ICheckoutItem) => {
  const [subtotal, setSubtotal] = useState<string>()
  const [formattedPrice, setformattedPrice] = useState<string>()
  const { removeItem } = useCart()

  useEffect(() => {
    setformattedPrice(
      formatCurrency({
        amount: price,
        minimumFractionDigits: 2
      })
    )
  }, [price])

  useEffect(() => {
    setSubtotal(
      formatCurrency({
        amount: price * quantity,
        minimumFractionDigits: 2
      })
    )
  }, [price, quantity])

  return (
    <StyledCheckoutItem>
      <StyledColumnZero>
        <StyledImageWrapper>
          <Image fill alt={title} src={image} />
        </StyledImageWrapper>
      </StyledColumnZero>

      <StyledColumnOne>
        <Text $size="sm">{title}</Text>
      </StyledColumnOne>

      <StyledColumnTwo>
        {!!formattedPrice && <Text $size="md">{formattedPrice}</Text>}
      </StyledColumnTwo>

      <StyledColumnThree>Ajuste Quantidade</StyledColumnThree>

      <StyledColumnFour>
        <span>
          <Text $size="xs" $colorSchema="grey1" id={`subtotal-${id}`}>
            SUBTOTAL
          </Text>
        </span>
        {!!subtotal && <Text $size="md">{subtotal}</Text>}
      </StyledColumnFour>

      <StyledColumnFive>
        <MdDelete size={24} onClick={() => removeItem(id)} />
      </StyledColumnFive>
    </StyledCheckoutItem>
  )
}
