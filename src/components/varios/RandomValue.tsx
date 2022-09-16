type RandomValueType = {
  value: number
}

type PositiveNumber = RandomValueType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

type NegativeNumber = RandomValueType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}

type Zero = RandomValueType & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}

type RandomValueProps = PositiveNumber | NegativeNumber | Zero

export const RandomValue = ({
  value,
  isPositive,
  isNegative,
  isZero
}: RandomValueProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}
      {isZero && 'zero'}
    </div>
  )
}
