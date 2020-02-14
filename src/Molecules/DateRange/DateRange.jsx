import React from 'react'
import styled from 'styled-components'

import DateTimePicker from '../../Atoms/DateTimePicker'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const onStartChange = (start, end) =>
  start > end ? ({ start, end: start }) :
  ({ start, end })

const onEndChange = (start, end) =>
  start > end ? ({ start: end, end }) :
  ({ start, end })

const DateRange = ({ value, onChange, ...props }) => {
  const { start = new Date(), end = new Date() } = value || {}

  return <Container>
    <DateTimePicker
      data-testid="date-range-start"
      value={start}
      onChange={start => onChange(onStartChange(start, end))}
      {...props}
    />
    <DateTimePicker
      data-testid="date-range-end"
      value={end}
      minDate={start}
      onChange={end => onChange(onEndChange(start, end))}
      {...props}
    />
  </Container>
}

export default DateRange
