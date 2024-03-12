import { ReactNode } from 'react'

export interface IButton {
  id?: string | number
  children: ReactNode
  $colorSchema?: 'primary' | 'secondary'
  $block?: boolean
  onClick?: () => void
}
