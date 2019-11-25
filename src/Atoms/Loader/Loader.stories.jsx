import React from 'react'
import { action } from '@storybook/addon-actions'

import Loader from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Loader',
}

export const loader = () => (
  <Loader />
)

loader.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
