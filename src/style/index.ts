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
    padding-top: calc(${({ theme }) => theme.header?.height} + 2rem);
  }

  a { 
    color: inherit; 
    text-decoration: none;
  }
`

export default GlobalStyle
