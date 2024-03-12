export interface IQuantityInput {
  quantity: number
  onAdd: () => void
  onRemove: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
