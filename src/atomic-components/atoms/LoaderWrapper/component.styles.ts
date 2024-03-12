import styled from 'styled-components'

export const StyledLoaderWrapper = styled.main`
  height: calc(100vh - ${({ theme }) => theme.header?.height} - 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
`
