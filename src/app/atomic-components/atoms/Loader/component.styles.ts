import styled, { keyframes } from 'styled-components'
const spin = keyframes`
  100% { transform: rotate(1turn) }
`

export const StyledLoader = styled.section`
  width: 62.25px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #ffffff 94%, #0000) top/3px 3px no-repeat,
    conic-gradient(#0000 30%, #ffffff);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
  animation: ${spin} 1s infinite linear;
`
