import styled from 'styled-components'

export const StyledQuantityInput = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const StyledInputButton = styled.button`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledInput = styled.input`
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 60px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 2px 5px;
`
