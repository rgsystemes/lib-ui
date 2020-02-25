import React from 'react'

import DateTimePicker from '../../Atoms/DateTimePicker'
import FlexBox from '../../Templates/FlexBox'

// We have to do that because maxDate and minDate
// don't take time into account
const onStartChange = (start, end) =>
  start > end ? ({ start, end: start }) :
  ({ start, end })

const onEndChange = (start, end) =>
  start > end ? ({ start: end, end }) :
  ({ start, end })

const DateRange = ({
  value,
  onChange,
  onBlur = () => {},
  startLabel,
  endLabel,
  ...props
}) => {
  const { start = new Date(), end = new Date() } = value || {}

  return (
    <FlexBox gap={1}>
      <DateTimePicker
        value={start}
        maxDate={end}
        label={startLabel}
        onBlur={onBlur}
        onChange={start => onChange(onStartChange(start, end))}
        {...props}
      />
      <DateTimePicker
        value={end}
        minDate={start}
        label={endLabel}
        onBlur={onBlur}
        onChange={end => onChange(onEndChange(start, end))}
        {...props}
      />
    </FlexBox>
  )
}

export default DateRange
