'use client'
import React, { useEffect, useState } from 'react'
import {
  StyledButtonWrapper,
  StyledCheckoutCard,
  StyledCheckoutCardContent,
  StyledCheckoutHeader,
  StyledColumnOne,
  StyledColumnThree,
  StyledColumnTwo,
  StyledDivider,
  StyledFooterControlWrapper,
  StyledFooterWrapper,
  StyledTotalWrapper
} from './component.styles'
import { Button, Card, Text } from '@/atomic-components/atoms'
import { CheckoutItem } from '@/atomic-components/molecules'
import { useCart } from '@/context/CartProvider'
import { formatCurrency } from '@/utils/formatCurreny'
import { useRouter } from 'next/navigation'

export const CheckoutCard = () => {
  const { cartItems, resetCart } = useCart()
  const router = useRouter()

  const [total, setTotal] = useState<string>()

  useEffect(() => {
    const initialValue = 0
    const value = cartItems.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      initialValue
    )

    setTotal(
      formatCurrency({
        amount: value,
        minimumFractionDigits: 2
      })
    )
  }, [cartItems])

  const checkout = () => {
    router.push('/sucesso')
    resetCart()
  }

  return (
    <Card>
      <StyledCheckoutCard>
        <StyledCheckoutCardContent>
          <StyledCheckoutHeader>
            <StyledColumnOne>
              <Text $size="sm" $colorSchema="grey1">
                PRODUTO
              </Text>
            </StyledColumnOne>
            <StyledColumnTwo>
              <Text $size="sm" $colorSchema="grey1">
                QTD
              </Text>
            </StyledColumnTwo>
            <StyledColumnThree>
              <Text $size="sm" $colorSchema="grey1">
                SUBTOTAL
              </Text>
            </StyledColumnThree>
          </StyledCheckoutHeader>
          {cartItems.map((product) => (
            <CheckoutItem key={product.id} product={product} />
          ))}
        </StyledCheckoutCardContent>
        <StyledFooterWrapper>
          <StyledDivider />
          <StyledFooterControlWrapper>
            <StyledButtonWrapper>
              <Button $block onClick={checkout}>
                Finalizar Pedido
              </Button>
            </StyledButtonWrapper>
            <StyledTotalWrapper>
              <Text $size="sm" $colorSchema="grey1" $hasMargin={false}>
                TOTAL
              </Text>
              {!!total && (
                <Text $size="xl" $colorSchema="grey3" $hasMargin={false}>
                  {total}
                </Text>
              )}
            </StyledTotalWrapper>
          </StyledFooterControlWrapper>
        </StyledFooterWrapper>
      </StyledCheckoutCard>
    </Card>
  )
}
