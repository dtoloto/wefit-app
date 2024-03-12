import styled from 'styled-components'

export const StyledContainer = styled.section`
  position: relative;
  max-width: calc(${({ theme }) => theme.containerWidth} + 2rem);
  margin: 0 auto;
  padding: 0 1rem;
`
