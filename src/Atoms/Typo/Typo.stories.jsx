import React from 'react'
import { text } from '@storybook/addon-knobs'

import Typo from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Typo',
}

export const typo = () => (
  <Typo>{text('text', 'Text content')}</Typo>
)

typo.story = {
  parameters: {
    notes: { markdown },
  },
}
