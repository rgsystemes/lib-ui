import React from 'react'
import styled from 'styled-components'

import DateTimePicker from '../../Atoms/DateTimePicker'

import useOnClickOutside from '../../hooks/useOnClickOutside.js'

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

const DateRange = ({ value, onChange, onBlur = () => {}, ...props }) => {
  const { start = new Date(), end = new Date() } = value || {}
  const ref = useOnClickOutside(onBlur)

  return <Container ref={ref}>
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
