import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import Button from './index'

import markdown from './README.md'

export default {
  title: 'Button',
}

export const button = () => (
  <Button />
)
button.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Button.test.jsx'],
  },
}
