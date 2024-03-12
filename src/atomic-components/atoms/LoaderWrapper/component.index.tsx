'use client'
import React from 'react'
import { ILoaderWrapper } from './component.types'
import { StyledLoaderWrapper } from './component.styles'

export const LoaderWrapper = ({ children }: ILoaderWrapper) => {
  return <StyledLoaderWrapper>{children}</StyledLoaderWrapper>
}
