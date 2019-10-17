import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, number } from '@storybook/addon-knobs'

import Breadcrumbs from './index'
import Breadcrumb from './Breadcrumb'

import markdown from './README.md'

export default {
  title: 'Organisms/Header/Breadcrumbs',
}

const treePath = [
  {
    id:       9302,
    name:     'Node 1',
    siblings: [
      { id: 918, name: 'Node 918' },
      { id: 915, name: 'Node 915' },
    ],
  },
  { id: 4302, name: 'Node 2' },
  {
    id:       8302,
    name:     'Node 3',
    siblings: [
      { id: 20, name: 'Node 20' },
      { id: 9107, name: 'Node 9107' },
    ],
  },
]

export const breadcrumbs = () => (
  <Breadcrumbs
    menuPath={'views'}
    treePath={treePath.map(({ id, name }, index) => ({ id, name: text(`Node ${index}`, name) }))}
    collapse={number('Collapse', 3)}
    separator={text('Separator', '/')}
  >
    {treePath.map(({ id, name, siblings }, index) => (
      <Breadcrumb
        key={id}
        icon={'test'}
        onSiblingSelect={action('sibling selected')}
        siblings={siblings}
      >
        {text(`Node ${index}`, name)}
      </Breadcrumb>
    ))}
  </Breadcrumbs>
)
breadcrumbs.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Breadcrumbs.test.jsx'],
  },
}
