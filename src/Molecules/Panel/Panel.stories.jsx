import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import Panel from './index'

import markdown from './README.md'

import { Button, Select } from '../../Atoms'

export default {
  title: 'Molecules/Panel',
}

export const panel = () => {
  const [opened, setOpened] = useState(false)
  return <Panel
    header="Title"
    opened={opened} onToggleOpen={() => setOpened(!opened)}
    actions={[
      <Button onClick={action('runAction')}>Action</Button>,
      <Select
        label="Actions"
        onChange={action('action selected')}
        options={['1', '2', '3', '4', '5'].map(n => `action ${n}`)}
      />,
    ]}
  >
    Content
  </Panel>
}
panel.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Panel.test.jsx'],
  },
}
