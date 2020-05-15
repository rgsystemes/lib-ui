import React from 'react'

import Export from '..'
import DateTimePicker from '../../../Atoms/DateTimePicker'
import FormControl from '../../../Molecules/FormControl'

const DateTimePickerForm = ({ label, value, onChange, ...props }) => (
  <FormControl>
    <DateTimePicker
      label={label}
      value={value}
      onChange={value => onChange(value)}
      {...props}
    />
  </FormControl>
)

export const DateIntervalExport = ({ value, onChange = () => {}, ...props }) => (
  <Export
    value={value}
    onChange={onChange}
    disabled={value.from === null || value.to === null || value.from >= value.to}
    {...props}
  >
    <DateTimePickerForm
      label="From"
      value={value.from}
      onChange={from => onChange({ ...value, from })}
    />
    <DateTimePickerForm
      label="To"
      value={value.to}
      onChange={to => onChange({ ...value, to })}
    />
  </Export>
)

export default DateIntervalExport
