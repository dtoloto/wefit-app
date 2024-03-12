interface IFormatCurrenty {
  amount: number
  currency?: string
  maximumFractionDigits?: number
  minimumFractionDigits?: number
  useGrouping?: boolean
  locale?: string
}

export const formatCurrency = ({
  amount,
  currency = 'BRL',
  maximumFractionDigits = 2,
  minimumFractionDigits = 0,
  useGrouping = true,
  locale
}: IFormatCurrenty) => {
  const result = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits,
    minimumFractionDigits,
    useGrouping
  })
    .format(amount)
    .replace(/^(\D+)/, '$1 ')
    .replace(/\s+/, ' ')

  return result
}
