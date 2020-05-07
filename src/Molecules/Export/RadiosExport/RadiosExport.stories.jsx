import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import Export from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Export',
}

const options = [
  { label: 'Export everything', value: 'all' },
  { label: 'Export view only', value: 'view' },
]

export const RadiosExport = () => {
  const [value, setValue] = useState({ data: null })

  return (
    <Export
      value={value}
      onChange={newValue => setValue({ ...value, ...newValue }) || action('export value changed')(newValue)}
      label="Export viewable data"
      options={options}
      onClose={action('cancel')}
      onExport={action('export')}
    />
  )
}

RadiosExport.story = {
  parameters: {
    notes: { markdown },
    jest:  ['RadiosExport.test.jsx'],
  },
}
