import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import Export from './index'
import FormControl, { FormLabel, FormControlLabel } from '../../Molecules/FormControl'
import Radio from '../../Atoms/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import markdown from './README.md'

export default {
  title: 'Molecules/Export',
}

const exportFormats = [
  { value: 'xls', label: 'Excel' },
  { value: 'xml', label: 'XML' },
  { value: 'json', label: 'JSON' },
  { value: 'csv-comma', label: 'CSV comma-separated' },
  { value: 'csv-semicolon', label: 'CSV semicolon-separated' },
  { value: 'txt', label: 'Text' },
]

const extraOptions = [
  { label: 'Choose red pill', value: 'red' },
  { label: 'Choose blue pill', value: 'blue' },
]

const ExtraOptions = ({ value, onChange }) =>
  <FormControl component="fieldset">
    <FormLabel component="legend">
      Extra option
    </FormLabel>
    <RadioGroup
      aria-label="exportScope"
      name="extraOption"
      value={value}
      onChange={event => {
        onChange(event.target.value)
        action('extra option changed')(event.target.value)
      }}
    >
      {extraOptions.map(({ label, value }) =>
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio />}
          label={label}
        />,
      )}
    </RadioGroup>
  </FormControl>

export const exportStory = () => {
  const [value, setValue] = useState({ format: '' })

  return <Export
    value={value}
    disabled={value.extraOption == null}
    onChange={newValue => {
      setValue({ ...value, ...newValue })
      action('export value changed')(newValue)
    }}
    onClose={action('export canceled')}
    onExport={action('export launched')}
    formats={exportFormats}
    extraOptions={
      <ExtraOptions
        value={value.extraOption}
        onChange={extraOption => {
          setValue({ ...value, extraOption })
        }}
      />
    }
  />
}

exportStory.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Export.test.jsx'],
  },
}
