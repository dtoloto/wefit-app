import styled, { keyframes } from 'styled-components'

const borderSize = '3px'

const spin = keyframes`
  100% { transform: rotate(1turn) }
`

export const StyledLoader = styled.section`
  width: 62.25px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, ${({ theme }) => theme.colors?.white} 94%, #0000) top/
      ${borderSize} ${borderSize} no-repeat,
    conic-gradient(#0000 30%, ${({ theme }) => theme.colors?.white});
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - ${borderSize}), #000 0);
  animation: ${spin} 1s infinite linear;
`
