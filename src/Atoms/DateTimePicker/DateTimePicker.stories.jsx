import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import DateTimePicker from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/DateTimePicker',
}

export const dateTimePicker = () => {
  const [date, setDate] = useState(new Date())

  return <DateTimePicker value={date} onChange={setDate}/>
}
dateTimePicker.story = {
  parameters: {
    notes: { markdown },
    jest:  ['DateTimePicker.test.jsx'],
  },
}
