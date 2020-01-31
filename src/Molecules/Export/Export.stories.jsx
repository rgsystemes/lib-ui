import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import Export from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Export',
}

const exportFormats = [
  { value: 'xls', label: 'Excel' },
  { value: 'xml', label: 'XML' },
  { value: 'json', label: 'JSON' },
  { value: 'csv-comma', label: 'CSV comma-separated' },
  { value: 'csv-semicolon', label: 'CSV semicolon-separated' },
  { value: 'txt', label: 'Text' },
]

export const exportStory = () => (
  <Export
    fileNameLabel="Nom du fichier"
    formatLabel="Format du fichier"
    onExport={action('export action')}
    formats={exportFormats}
  />
)
exportStory.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Export.test.jsx'],
  },
}
