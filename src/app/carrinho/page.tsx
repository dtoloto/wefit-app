import { FeedbackCard } from '@/atomic-components'

export default async function Cart() {
  return (
    <main>
      <FeedbackCard
        description="Parece que não há nada por aqui :("
        href="/"
        image={{
          src: '/assets/feedback-1.svg',
          width: 447,
          height: 265
        }}
      />
    </main>
  )
}
