import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import IconButton from '../IconButton'
import { Search } from 'styled-icons/material/Search'

import Input from './index'
import InputAdornment from './InputAdornment'

import markdown from './README.md'

export default {
  title: 'Atoms/Input',
}

const sizes = ['large', 'medium', 'small']
const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 10px;
  }
`

export const input = () =>
  <Container>
    {sizes.map(size =>
      <Input
        placeholder={`${size} placeholder`}
        name="input"
        disabled={boolean('Disabled')}
        error={boolean('Error')}
        endAdornment={<InputAdornment><IconButton><Search size={20}/></IconButton></InputAdornment>}
        size={size}
      />
    )}
  </Container>
input.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Input.test.jsx'],
  },
}
