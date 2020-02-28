import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import DateRange from './index'
import FlexBox from '../../Templates/FlexBox'
import markdown from './README.md'

export default {
  title: 'Molecules/DateRange',
}

export const dateRange = () => {
  const [value, setValue] = useState()

  return (
    <FlexBox height="500px" alignItems="flex-start">
      <DateRange
        value={value}
        onBlur={action('on blur')}
        onChange={value => {
          setValue(value)
          action('Date changed')(value)
        }}
        variant={select('variant', ['inline', 'static'], 'inline')}
      />
    </FlexBox>
  )
}
dateRange.story = {
  parameters: {
    notes: { markdown },
    jest:  ['DateRange.test.jsx'],
  },
}
