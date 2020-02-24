import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import DateRange from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/DateRange',
}

export const dateRange = () => {
  const [value, setValue] = useState()

  return <DateRange
    value={value}
    onBlur={action('on blur')}
    onChange={value => {
      setValue(value)
      action('Date changed')(value)
    }}
    variant={select('variant', ['inline', 'static'], 'inline')}
  />
}
dateRange.story = {
  parameters: {
    notes: { markdown },
    jest:  ['DateRange.test.jsx'],
  },
}
