import { IProduct } from '@/types/product'
import { ProductCard } from '@/atomic-components'
import { Row } from '@/atomic-components/atoms'
import { Loader } from '@/atomic-components/atoms/Loader'

export default async function Home() {
  const res = await fetch('http://localhost:3001/products')
  const data = await res.json()

  return (
    <main>
      <Loader />
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
