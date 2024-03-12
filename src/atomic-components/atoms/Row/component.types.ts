import { ReactNode } from 'react'

export interface IRow {
  children: ReactNode
  mobile: number
  tablet?: number
  desktop?: number
}
