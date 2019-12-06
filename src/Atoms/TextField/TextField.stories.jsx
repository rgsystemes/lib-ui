import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'

import TextField from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/TextField',
}

const sizes = ['large', 'medium', 'small']
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const textField = () =>
  <Container>
    {sizes.map(size =>
      <TextField
        key={size}
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        label={text('Label', 'Label')}
        helperText={`${size} text field`}
        placeholder="Placeholder"
        size={size}
      />
    )}
  </Container>

textField.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
