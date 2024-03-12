import styled from 'styled-components'

export const StyledCheckoutItem = styled.div`
  height: 100%;
  display: grid;

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (min-width: 768px) {
    gap: 0.5rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`

export const StyledColumnZero = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 3;
  grid-column-end: 2;
`

export const StyledColumnOne = styled.div`
  display: flex;

  grid-row-start: 1;
  grid-column-start: 2;

  grid-row-end: 2;
  grid-column-end: 4;

  @media (min-width: 768px) {
    align-items: flex-end;

    grid-row-start: 1;
    grid-column-start: 2;

    grid-row-end: 2;
    grid-column-end: 3;
  }
`

export const StyledColumnTwo = styled.div`
  grid-row-start: 1;
  grid-column-start: 4;

  grid-row-end: 2;
  grid-column-end: 5;

  @media (min-width: 768px) {
    grid-row-start: 2;
    grid-column-start: 2;

    grid-row-end: 3;
    grid-column-end: 3;
  }
`

export const StyledColumnThree = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;

  grid-row-end: 3;
  grid-column-end: 4;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    grid-row-start: 1;
    grid-column-start: 3;

    grid-row-end: 3;
    grid-column-end: 4;
  }
`

export const StyledColumnFour = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  grid-row-start: 2;
  grid-column-start: 4;

  grid-row-end: 3;
  grid-column-end: 6;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    grid-row-start: 1;
    grid-column-start: 4;

    grid-row-end: 3;
    grid-column-end: 5;

    & > span {
      display: none;
    }
  }
`

export const StyledColumnFive = styled.div`
  grid-row-start: 1;
  grid-column-start: 5;

  grid-row-end: 2;
  grid-column-end: 6;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    grid-row-start: 1;
    grid-column-start: 5;

    grid-row-end: 3;
    grid-column-end: 6;
  }

  & > * {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 82px;

  @media (min-width: 768px) {
    width: 147px;
    height: 188px;
  }
`
