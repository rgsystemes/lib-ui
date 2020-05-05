import React, { useState } from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { boolean, button } from '@storybook/addon-knobs'

import Select, { Option } from './index'
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
    key:    'Native Select',
    native: true,
  },
  {
    key: 'Simple Select',
  },
  {
    key:         'Descriptive Select',
    description: 'Option description %d',
  },
]

export const select = () => {
  const [option, setOption] = useState('')
  const handleChange = ({ target: { value } }) => setOption(value) || action('change')(value)

  button('Reset', () => setOption(''))

  return selects.map(({ key, description = '', ...props }) => (
    <Container key={key}>
      <InputLabel id={`label-${key}`} htmlFor={`select-${key}`} style={{ paddingBottom: 5 }}>{key}</InputLabel>
      <Select value={option} labelId={`label-${key}`} inputProps={{ id: `select-${key}` }} onChange={handleChange} {...props} disabled={boolean('Disabled', false)}>
        {[1, 2, 3].map(value => (
          <Option key={value} value={value} description={description.replace('%d', value)}>
            Option #{value}
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
