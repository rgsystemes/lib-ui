import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import DateRange from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/DateRange',
}

export const dateRange = () => {
  const [value, setValue] = useState()

  return <DateRange
    value={value}
    onChange={value => {
      setValue(value)
      action('Date changed')(value)
    }}
    variant="static"
  />
}
dateRange.story = {
  parameters: {
    notes: { markdown },
    jest:  ['DateRange.test.jsx'],
  },
}
