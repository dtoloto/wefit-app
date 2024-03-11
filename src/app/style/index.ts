import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.grey3};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`

export default GlobalStyle
