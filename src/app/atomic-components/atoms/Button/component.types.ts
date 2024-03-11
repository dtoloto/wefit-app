import { ReactNode } from 'react'

export interface IButton {
  children: ReactNode
  colorSchema?: 'primary' | 'secondary'
  onClick?: () => void
  block?: boolean
}
