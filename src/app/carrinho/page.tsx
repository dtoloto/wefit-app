'use client'
import { CheckoutCard, FeedbackCard } from '@/atomic-components'
import { useCart } from '@/context/CartProvider'

export default function Cart() {
  const { cartItems } = useCart()
  if (cartItems.length === 0)
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

  return <CheckoutCard />
}
