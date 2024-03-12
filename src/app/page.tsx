import { FeedbackCard, Header, ProductCard } from './atomic-components'
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

        <FeedbackCard
          description="Parece que não há nada por aqui :("
          href="/"
          image={{
            src: '/assets/feedback-1.svg',
            width: 447,
            height: 265
          }}
        />
        <FeedbackCard
          description="Compra realizada com sucesso!"
          href="/"
          image={{
            src: '/assets/feedback-2.svg',
            width: 295,
            height: 307
          }}
        />
      </Container>
    </main>
  )
}
