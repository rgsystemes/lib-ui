import React, { useState } from 'react'

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
    jest:  [],
  },
}
