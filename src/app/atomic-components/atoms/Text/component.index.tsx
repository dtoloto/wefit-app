'use client'
import React from 'react'
import { IText } from './component.types'
import { StyledText } from './component.styles'

export const Text = ({ children, colorSchema, hasMargin, size }: IText) => {
  return (
    <StyledText colorSchema={colorSchema} hasMargin={hasMargin} size={size}>
      {children}
    </StyledText>
  )
}
