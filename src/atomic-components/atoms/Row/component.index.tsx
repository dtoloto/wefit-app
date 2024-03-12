'use client'
import React from 'react'
import { IRow } from './component.types'
import { StyledRow } from './component.styles'

export const Row = ({ $mobile, $tablet, $desktop, children }: IRow) => {
  return (
    <StyledRow $mobile={$mobile} $tablet={$tablet} $desktop={$desktop}>
      {children}
    </StyledRow>
  )
}
