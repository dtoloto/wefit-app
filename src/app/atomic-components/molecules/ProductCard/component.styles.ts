import styled from 'styled-components'

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const StyledButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
    gap: 0.25rem;
    span {
      font-weight: 400;
    }
  }
`
