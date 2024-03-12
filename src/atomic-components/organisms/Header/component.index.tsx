'use client'
import React from 'react'
import { IHeader } from './component.types'
import { StyledHeader } from './component.styles'
import { Text } from '../../atoms'
import { CartMenu } from '../..'
import Link from 'next/link'

export const Header = ({}: IHeader) => {
  return (
    <StyledHeader>
      <Link href="/">
        <Text $hasMargin={false} $colorSchema="white" $size="lg">
          WeMovies
        </Text>
      </Link>
      <CartMenu />
    </StyledHeader>
  )
}
