import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import Button from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Button',
}

export const button = () => (
  <Button onClick={action('clicked')}>
    {text('button content', 'Test')}
  </Button>
)

button.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Button.test.jsx'],
  },
}
