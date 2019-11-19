import React, { useMemo } from 'react'
import Typo from '../Typo'

const useByte = (units, value = 0, accuracy) => {
  const roundFactor = useMemo(() => Math.pow(10, accuracy), [accuracy])

  const scales = useMemo(
    () => units.map((unit, power) => ({ unit, scale: Math.pow(1024, power) })),
    [units]
  )

  const { scale, unit } = useMemo(
    () => (
      scales.length ? scales.reduce((acc, obj) => value >= obj.scale ? obj : acc) :
      { scale: 1, unit: '' }
    ),
    [scales, value]
  )

  const bytes = useMemo(
    () => Math.round(value * roundFactor / scale) / roundFactor,
    [value, roundFactor, scale]
  )
  return { bytes, unit }
}

const Byte = ({ children, accuracy = 2, units = [], ...props }) => {
  const { bytes, unit } = useByte(units, children, accuracy)
  return <Typo {...props}>{bytes} {unit}</Typo>
}

export default Byte
