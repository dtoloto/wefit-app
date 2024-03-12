'use client'
import React from 'react'
import { IFeedbackCard } from './component.types'
import { Button, Card, Text } from '../../atoms'
import { StyledFeedbackCard } from './component.styles'
import Image from 'next/image'
import Link from 'next/link'

export const FeedbackCard = ({
  description,
  href,
  image: { height, src, width }
}: IFeedbackCard) => {
  return (
    <Card>
      <StyledFeedbackCard>
        <Text>{description}</Text>
        <Image src={src} width={width} height={height} alt="Feedback image" />
        <Link href={href}>
          <Button>Voltar</Button>
        </Link>
      </StyledFeedbackCard>
    </Card>
  )
}
