import { Container } from './atomic-components/atoms'
import { Card } from './atomic-components/atoms/Card'
import { Loader } from './atomic-components/atoms/Loader'

export default function Home() {
  return (
    <main>
      <Container>Teste</Container>
      <Loader />
      <Card>Teste</Card>
    </main>
  )
}
