import { Header, ProductCard } from './atomic-components'
import { Container, Row } from './atomic-components/atoms'
import { Button } from './atomic-components/atoms/Button'
import { Card } from './atomic-components/atoms/Card'
import { Loader } from './atomic-components/atoms/Loader'
import { Text } from './atomic-components/atoms/Text'

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
      </Container>
      <Container>
        <Loader />
        <Card>Teste</Card>
        <Button $colorSchema="primary">Teste</Button>
        <Text $colorSchema="grey1" $size="xs">
          Um Texto
        </Text>

        <Row mobile={1} desktop={3}>
          <ProductCard />
        </Row>
      </Container>
    </main>
  )
}
