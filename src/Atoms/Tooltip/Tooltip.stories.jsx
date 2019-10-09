import React from 'react'
// import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import Tooltip from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Tooltip',
}

export const tooltip = () => (
  <Tooltip />
)
tooltip.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Tooltip.test.jsx'],
  },
}
