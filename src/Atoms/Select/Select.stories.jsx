import React, { useState } from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { boolean, button } from '@storybook/addon-knobs'

import Select from './index'
import Option from './Option'
import InputLabel from '../../Molecules/FormControl/InputLabel'

import markdown from './README.md'

export default {
  title: 'Atoms/Select',
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`

const selects = [
  {
    key:    'native-select',
    native: true,
  },
  {
    key: 'simple-Select',
  },
]

export const select = () => {
  const [option, setOption] = useState('')
  const handleChange = ({ target: { value } }) => setOption(value) || action('change')(value)

  button('Reset', () => setOption(''))

  return selects.map(({ key, ...props }) => (
    <Container key={key}>
      <InputLabel id={`label-${key}`} htmlFor={`select-${key}`}>Label</InputLabel>
      <Select value={option} labelId={`label-${key}`} inputProps={{ id: `select-${key}` }} onChange={handleChange} {...props} disabled={boolean('Disabled', false)}>
        {[1, 2, 3].map(value => (
          <Option key={value} value={value}>
            Option {value}
          </Option>
        ))}
      </Select>
    </Container>
  ))
}

select.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Select.test.jsx'],
  },
}
