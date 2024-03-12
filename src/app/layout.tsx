'use client'
import { Open_Sans } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Container, Header } from '@/atomic-components'
import { CartProvider } from '@/context/CartProvider'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/style/theme'
import GlobalStyle from '@/style'

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <html lang="pt-br">
            <body className={openSans.className}>
              <Container>
                <Header />
              </Container>
              <Container>{children}</Container>
            </body>
          </html>
        </StyledComponentsRegistry>
      </CartProvider>
    </ThemeProvider>
  )
}
