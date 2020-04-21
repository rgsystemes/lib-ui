import React, { useState } from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import FormGroup from '@material-ui/core/FormGroup'
import RadioGroup from '@material-ui/core/RadioGroup'

import FormControl, { FormLabel, FormControlLabel } from './index'
import FormHelperText from './FormHelperText'
import InputLabel from './InputLabel'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'
import Radio from '../../Atoms/Radio'
import Checkbox from '../../Atoms/Checkbox'
import DateTimePicker from '../../Atoms/DateTimePicker'

import markdown from './README.md'

export default {
  title: 'Molecules/FormControl',
}

const options = [
  { value: 'choice1', label: 'Choice 1' },
  { value: 'choice2', label: 'Choice 2' },
  { value: 'choice3', label: 'Choice 3' },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const formControl = () => {
  const errorState = boolean('Error', false)
  const label = text('Label', 'Label')
  const helpText = text('Help text', 'Help text')
  const disabled = boolean('Disabled', false)
  const [date, setDate] = useState(new Date())
  const [option, setOption] = useState('')
  const handleChange = event => (setOption(event.target.value) && action('Select changed'))

  return <Container>
    <FormControl error={errorState} disabled={disabled}>
      <InputLabel>
        {label}
        <Input placeholder="Placeholder" onChange={action('Input changed')}/>
      </InputLabel>
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </FormControl>
    <FormControl error={errorState} disabled={disabled}>
      <InputLabel>
        {label}
        <Select value={option} onChange={handleChange}>
          {options.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
        </Select>
      </InputLabel>
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </FormControl>
    <FormControl component="fieldset" error={errorState} disabled={disabled}>
      <FormLabel component="legend">Radio group</FormLabel>
      <RadioGroup
        aria-label="radioGroup"
        name="radioGroup"
        onChange={action('Radio group changed')}
      >
        {options.map(({ value, label }) =>
          <FormControlLabel value={value} key={value} control={<Radio />} label={label} />,
        )}
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset" error={errorState} disabled={disabled}>
      <FormLabel component="legend">Checkbox group</FormLabel>
      <FormGroup
        aria-label="checkboxGroup"
        name="checkboxGroup"
        onChange={action('Checkbox group changed')}
      >
        {options.map(({ value, label }) =>
          <FormControlLabel
            control={<Checkbox value={value} onChange={action('Checkbox changed')}/>}
            label={label}
            key={value}
          />,
        )}
      </FormGroup>
    </FormControl>
    <DateTimePicker
      label={label}
      error={errorState}
      disabled={disabled}
      helperText={helpText}
      value={date}
      onChange={setDate}
    />
  </Container>
}
formControl.story = {
  parameters: {
    notes: { markdown },
    jest:  ['FormControl.test.jsx'],
  },
}
