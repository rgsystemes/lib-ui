import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import FormControl from './index'
import FormHelperText from './FormHelperText'
import InputLabel from './InputLabel'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'

import markdown from './README.md'

export default {
  title: 'Molecules/FormControl',
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const formControl = () => {
  const errorState = boolean('Error', false)
  const label = text('Label', 'Label')
  const helpText = text('Help text', 'Help text')
  const disabled = boolean('Disabled', false)

  return <Container>
    <FormControl error={errorState} disabled={disabled}>
      <InputLabel>
        {label}
      </InputLabel>
      <Input placeholder="Placeholder" onChange={action('Input changed')}/>
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </FormControl>
    <FormControl error={errorState} disabled={disabled}>
      <InputLabel>
        {label}
      </InputLabel>
      <Select onChange={action('Select changed')}>
        <option value="0">
          Choose an option
        </option>
        <option>
          Option 1
        </option>
        <option>
          Option 2
        </option>
        <option>
          Option 3
        </option>
      </Select>
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </FormControl>
  </Container>
}
formControl.story = {
  parameters: {
    notes: { markdown },
    jest:  ['FormControl.test.jsx'],
  },
}
