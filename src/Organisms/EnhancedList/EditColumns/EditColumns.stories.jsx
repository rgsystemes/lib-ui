import React from 'react'
import { action } from '@storybook/addon-actions'

import {  } from '@storybook/addon-knobs'

import EditColumns from './index'

import markdown from './README.md'

export default {
  title: 'Organisms/EnhancedList/EditColumns',
}

export const editColumns = () => (
  <EditColumns
    columns={[
      { name: 'name', translationKey: 'Name', description: 'Name of the character', show: true },
      { name: 'age', translationKey: 'Age', description: 'Age of the character', show: true },
      { name: 'job', translationKey: 'Job', description: 'What does the character do for a living', show: true },
      { name: 'country', translationKey: 'Country', description: 'Where does the character live', show: true },
      { name: 'haircolor', translationKey: 'Hair color', description: 'What is the character\'s hair color', show: false },
    ]}
    onChange={action('column toggled')}
  />
)

editColumns.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
