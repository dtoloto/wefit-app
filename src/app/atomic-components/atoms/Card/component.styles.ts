import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  padding: 10px 11px 10px 11px;
  color: black;
  border-radius: ${({ theme }) => theme.borderRadius};
`
