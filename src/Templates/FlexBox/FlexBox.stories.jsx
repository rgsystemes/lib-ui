import React, { useState } from 'react'

import FlexBox from './index'

import markdown from './README.md'

export default {
  title: 'Templates/FlexBox',
}

export const flexBox = () => {
  const [gap, setGap] = useState(2)
  const [padding, setPadding] = useState(1)
  const [direction, setDirection] = useState('column')

  return (
    <FlexBox fontFamily='fontFamily' flexDirection='column'>
      <label>
        Flex direction: {direction}
        <input
          type='checkbox'
          checked={direction === 'column'}
          onChange={() => setDirection(
            direction === 'column' ? 'row' : 'column',
          )}
        />
      </label>
      <label>
        Gap
        <input
          type='range'
          min='0' max='10'
          value={gap}
          onChange={ev => setGap(ev.target.value)}
        />
      </label>
      <label>
        Padding
        <input
          type='range'
          min='0' max='10'
          value={padding}
          onChange={ev => setPadding(Number(ev.target.value))}
        />
      </label>
      <FlexBox flexDirection={direction} gap={gap} p={padding} border='1px solid black'>
        <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
        <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
        <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
      </FlexBox>
    </FlexBox>
  )
}

export const LayoutExample = () => {
  const [gap, setGap] = useState(2)
  const [padding, setPadding] = useState(1)

  return (
    <FlexBox fontFamily='fontFamily' flexDirection='column'>
      <label>Gap
        <input
          type='range'
          min='0' max='10'
          value={gap}
          onChange={ev => setGap(ev.target.value)}
        />
      </label>
      <label>Padding
        <input
          type='range'
          min='0' max='10'
          value={padding}
          onChange={ev => setPadding(Number(ev.target.value))}
        />
      </label>
      <FlexBox gap={gap} p={padding} border='1px solid black'>
        <FlexBox gap={gap} flexDirection='column' minWidth={300} minHeight={200}>
          <FlexBox minWidth={300} minHeight={300} bgcolor='grey.300'/>
          <FlexBox minWidth={300} minHeight={200} bgcolor='grey.300'/>
        </FlexBox>
        <FlexBox gap={gap} flexGrow={1} flexDirection='column' minWidth={300} minHeight={200}>
          <FlexBox gap={gap} minWidth={300} minHeight={200}>
            <FlexBox flexGrow={2} minWidth={300} minHeight={200} bgcolor='grey.300'/>
            <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
          </FlexBox>
          <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

flexBox.story = {
  parameters: {
    notes: { markdown },
    jest:  ['FlexBox.test.jsx'],
  },
}
