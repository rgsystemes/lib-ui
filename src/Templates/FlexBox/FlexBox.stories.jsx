import React from 'react'
import { number, select, boolean } from '@storybook/addon-knobs'
import FlexBox from './index'

import markdown from './README.md'

export default {
  title: 'Templates/FlexBox',
}

const directions = ['row', 'column'].reduce(
  (acc, direction) => ({ ...acc, [direction]: direction }),
  {},
)

export const flexBox = () => {
  const gap = number('Gap', 2, { range: true, min: 0, max: 10, step: 1 })
  const padding = number('Padding', 2, { range: true, min: 0, max: 10, step: 1 })
  const direction = select('Flex direction', directions, 'column')

  return (
    <FlexBox flexDirection={direction} gap={gap} p={padding} border='1px solid black'>
      <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
      <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
      <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor='grey.300'/>
    </FlexBox>
  )
}

export const LayoutExample = () => {
  const gap = number('Gap', 2, { range: true, min: 0, max: 10, step: 1 })
  const padding = number('Padding', 2, { range: true, min: 0, max: 10, step: 1 })
  const opacity = number('Background opacity', 0.2, { range: true, min: 0, max: 1, step: 0.1 })
  const border = boolean('Border on containers', false)

  return (
    <FlexBox gap={gap} p={padding} flexGrow={1} bgcolor={`rgba(0, 0, 0, ${opacity})`} border={border ? '1px solid green' : 'none'} >
      <style>
        {`html, body, #root {
          display: flex;
          margin: 0;
          height: 100%;
          width: 100%;
        }`}
      </style>
      <FlexBox gap={gap} flexDirection='column' minWidth={300} minHeight={200} bgcolor={`rgba(0, 0, 0, ${opacity})`} border={border ? '1px solid blue' : 'none'} >
        <FlexBox minWidth={300} minHeight={300} flexGrow={1} bgcolor={`rgba(0, 0, 0, ${opacity})`} />
        <FlexBox minWidth={300} minHeight={200} bgcolor={`rgba(0, 0, 0, ${opacity})`} />
      </FlexBox>
      <FlexBox gap={gap} flexGrow={1} flexDirection='column' minWidth={300} minHeight={200} bgcolor={`rgba(0, 0, 0, ${opacity})`} border={border ? '1px solid blue' : 'none'} >
        <FlexBox gap={gap} minWidth={300} minHeight={200} bgcolor={`rgba(0, 0, 0, ${opacity})`} border={border ? '1px solid red' : 'none'} >
          <FlexBox flexGrow={2} minWidth={300} minHeight={200} bgcolor={`rgba(0, 0, 0, ${opacity})`} />
          <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor={`rgba(0, 0, 0, ${opacity})`} />
        </FlexBox>
        <FlexBox flexGrow={1} minWidth={300} minHeight={200} bgcolor={`rgba(0, 0, 0, ${opacity})`} />
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
