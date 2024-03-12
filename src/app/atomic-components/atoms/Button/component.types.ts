import { ReactNode } from 'react'

export interface IButton {
  children: ReactNode
  $colorSchema?: 'primary' | 'secondary'
  $block?: boolean
  onClick?: () => void
}
