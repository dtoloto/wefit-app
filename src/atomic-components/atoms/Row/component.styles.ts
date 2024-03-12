import styled from 'styled-components'
import { IRow } from './component.types'

export const StyledRow = styled.div<IRow>`
  display: grid;
  grid-template-columns: repeat(${({ $mobile }) => $mobile}, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(${({ $tablet, $mobile }) => $tablet || $mobile}, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      ${({ $desktop, $tablet, $mobile }) => $desktop || $tablet || $mobile},
      1fr
    );
  }
`
