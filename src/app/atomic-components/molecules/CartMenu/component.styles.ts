import styled from 'styled-components'

export const StyledCartMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-end;

  & #my-cart {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`
