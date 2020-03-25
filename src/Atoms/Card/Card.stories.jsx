import React from 'react'

import { text } from '@storybook/addon-knobs'

import Card from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Card',
}

export const card = () => (
  <Card>
    <span>{text('message', 'Text message')}</span>
    <span>{text('message', 'Another text message')}</span>
  </Card>
)

card.story = {
  parameters: {
    notes: { markdown },
  },
}
