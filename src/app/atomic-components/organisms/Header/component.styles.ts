import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: ${({ theme }) => theme.header?.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  position: sticky;
  top: 0;
`
