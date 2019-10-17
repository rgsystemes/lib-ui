import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, number } from '@storybook/addon-knobs'

import Breadcrumb from './index'

import markdown from './README.md'

export default {
  title: 'Organisms/Header/Breadcrumbs/Breadcrumb',
}

const siblings = [
  { id: 9302, name: 'Node 1' },
  { id: 4302, name: 'Node 2' },
  { id: 8302, name: 'Node 3' },
]

export const breadcrumb = () => (
  <Breadcrumb
    siblings={siblings}
    onSiblingSelect={action('sibling selected')}
  >
    { text('Title', 'Node 24') }
  </Breadcrumb>
)

breadcrumb.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Breadcrumb.test.jsx'],
  },
}
