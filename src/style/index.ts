import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.grey3};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`

export default GlobalStyle
