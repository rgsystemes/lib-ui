import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

import SidePanel from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/SidePanel',
}

export const sidePanel = () => (
  <SidePanel show={boolean('Show', true)}>
    Hello, I am a side panel
  </SidePanel>
)
sidePanel.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
