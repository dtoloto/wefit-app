'use client'
import React from 'react'
import { IContainer } from './component.types'
import { StyledContainer } from './component.styles'

export const Container = ({ children }: IContainer) => {
  return <StyledContainer>{children}</StyledContainer>
}
