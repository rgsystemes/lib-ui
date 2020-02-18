import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'

import DateTimePicker, { MuiPickersUtilsProvider } from './index'

import util from '@date-io/date-fns'
import * as locales from 'date-fns/locale'
import markdown from './README.md'

export default {
  title: 'Atoms/DateTimePicker',
}

export const dateTimePicker = () => {
  const [date, setDate] = useState(new Date())

  return <MuiPickersUtilsProvider utils={util} locale={locales[select('Lang', ['fr', 'en', 'nl', 'zhCN'], 'fr')]}>
    <DateTimePicker value={date} onChange={setDate} />
  </MuiPickersUtilsProvider>
}
dateTimePicker.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
