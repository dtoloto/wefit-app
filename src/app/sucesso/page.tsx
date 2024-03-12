import { FeedbackCard } from '@/atomic-components'

export default async function Cart() {
  return (
    <main>
      <FeedbackCard
        description="Compra realizada com sucesso!"
        href="/"
        image={{
          src: '/assets/feedback-2.svg',
          width: 295,
          height: 307
        }}
      />
    </main>
  )
}
