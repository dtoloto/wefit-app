'use client'
import { IProduct } from '@/types/product'
import { ProductCard } from '@/atomic-components'
import { Row } from '@/atomic-components/atoms'
import { Loader } from '@/atomic-components/atoms/Loader'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading)
    return (
      <main>
        <Loader />
      </main>
    )

  return (
    <main>
      <Row $mobile={1} $desktop={3}>
        {data.map(({ id, image, price, title }: IProduct) => (
          <ProductCard
            key={id}
            product={{
              image,
              price,
              title,
              id
            }}
          />
        ))}
      </Row>
    </main>
  )
}
