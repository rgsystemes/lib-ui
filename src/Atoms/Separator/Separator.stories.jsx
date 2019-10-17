import React from 'react'
import { text  } from '@storybook/addon-knobs'

import Separator from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Separator',
}

export const separator = () => (
  <Separator separator={text('Separator', '|')}/>
)

separator.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Separator.test.jsx'],
  },
}
