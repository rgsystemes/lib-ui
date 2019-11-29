import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'

import Input from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Input',
}

export const input = () => (
  <Input placeholder={text('Placeholder', 'Placeholder')} name="input" error={boolean('Error')}/>
)
input.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Input.test.jsx'],
  },
}
