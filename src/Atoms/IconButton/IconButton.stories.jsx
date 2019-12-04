import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import IconButton from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/IconButton',
}

export const iconButton = () => (
  <IconButton />
)
iconButton.story = {
  parameters: {
    notes: { markdown },
    jest:  ['IconButton.test.jsx'],
  },
}
