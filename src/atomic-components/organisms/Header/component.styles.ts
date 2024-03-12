import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: ${({ theme }) => theme.header?.height};
  background: ${({ theme }) => theme.colors?.grey3};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  position: fixed;
  z-index: 1;
  width: calc(100% - 1rem);
  max-width: ${({ theme }) => theme.containerWidth};
  top: 0;
`
