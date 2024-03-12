'use client'
import React from 'react'
import { IHeader } from './component.types'
import { StyledHeader } from './component.styles'
import { Text } from '../../atoms'
import { CartMenu } from '../..'

export const Header = ({}: IHeader) => {
  return (
    <StyledHeader>
      <Text $hasMargin={false} $colorSchema="white" $size="lg">
        WeMovies
      </Text>
      <CartMenu />
    </StyledHeader>
  )
}
