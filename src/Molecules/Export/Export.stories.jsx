import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import Export from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Export',
}

export const GenericExport = () => {
  const [value, setValue] = useState()

  return (
    <Export
      value={value}
      onChange={newValue => setValue({ ...value, ...newValue }) || action('export value changed')(newValue)}
      onClose={action('cancel')}
      onExport={action('export')}
    />
  )
}

GenericExport.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Export.test.jsx'],
  },
}
