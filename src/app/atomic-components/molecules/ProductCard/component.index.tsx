'use client'
import React from 'react'
import { IProductCard } from './component.types'
import { Button, Card, Text } from '../../atoms'
import Image from 'next/image'
import { StyledButtonContent, StyledProductCard } from './component.styles'
import { MdAddShoppingCart } from 'react-icons/md'

export const ProductCard = ({}: IProductCard) => {
  return (
    <Card>
      <StyledProductCard>
        <Image
          alt="dasd"
          src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
          width={147}
          height={188}
        />
        <Text $size="xs" $colorSchema="grey2" $hasMargin={false}>
          Viúva Negra
        </Text>
        <Text $size="md">R$ 29,99</Text>
        <Button $block>
          <StyledButtonContent>
            <div>
              <MdAddShoppingCart size={14} />
              <span>0</span>
            </div>
            Adicionar ao Carrinho
          </StyledButtonContent>
        </Button>
      </StyledProductCard>
    </Card>
  )
}
