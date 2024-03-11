import styled from 'styled-components'
import { IButton } from './component.types'

export const StyledButton = styled.button<IButton>`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors?.white};
  background-color: ${({ theme, colorSchema = 'primary' }) => theme.colors?.[colorSchema]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 11px;
  min-width: 180px;
  transition: filter 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  ${({ block }) =>
    block &&
    `
    width: 100%;
  `}
`
