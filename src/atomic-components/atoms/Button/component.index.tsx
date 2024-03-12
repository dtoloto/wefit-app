'use client'
import React from 'react'
import { IButton } from './component.types'
import { StyledButton } from './component.styles'

export const Button = ({ id, children, $colorSchema, $block, onClick }: IButton) => {
  return (
    <StyledButton id={id} onClick={onClick} $colorSchema={$colorSchema} $block={$block}>
      {children}
    </StyledButton>
  )
}
