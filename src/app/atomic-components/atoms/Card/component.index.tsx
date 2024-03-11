'use client'
import React from 'react'
import { StyledCard } from './component.styles'
import { ICard } from './component.types'

export const Card = ({ children }: ICard) => {
  return <StyledCard>{children}</StyledCard>
}
