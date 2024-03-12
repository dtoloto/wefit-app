'use client'
import React from 'react'
import { IQuantityInput } from './component.types'
import { StyledInput, StyledInputButton, StyledQuantityInput } from './component.styles'
import { MdOutlineAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'

export const QuantityInput = ({ onAdd, onRemove, onChange, quantity }: IQuantityInput) => {
  return (
    <StyledQuantityInput>
      <StyledInputButton onClick={onRemove}>
        <MdRemoveCircleOutline />
      </StyledInputButton>
      <StyledInput
        type="number"
        min="1"
        max="99"
        onChange={onChange}
        value={quantity}
        defaultValue={quantity}
      />
      <StyledInputButton onClick={onAdd}>
        <MdOutlineAddCircleOutline />
      </StyledInputButton>
    </StyledQuantityInput>
  )
}
