import styled from 'styled-components'

export const StyledCheckoutCard = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.header?.height} - 3rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 768px) {
    min-height: auto;
    gap: 1rem;
  }
`
export const StyledCheckoutCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex-grow: 1;

  @media (min-width: 768px) {
    min-height: auto;
    gap: 2rem;
  }
`

export const StyledCheckoutHeader = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`
export const StyledColumnOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`

export const StyledColumnTwo = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`

export const StyledColumnThree = styled.div`
  grid-column-start: 4;
  grid-column-end: 6;
`

export const StyledDivider = styled.hr`
  background-color: ${({ theme }) => theme.colors.grey1};
  margin: 1.5rem 0;
`

export const StyledFooterWrapper = styled.div``

export const StyledFooterControlWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const StyledButtonWrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 235px;
  }
`
export const StyledTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
  justify-content: flex-end;
`
