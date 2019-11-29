import React from 'react'
import { action } from '@storybook/addon-actions'

import Select from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Select',
}

export const select = () => (
  <Select onChange={action('change')}>
    <option value="0">
        Choose an option
    </option>
    <option>
        Option 1
    </option>
    <option>
        Option 2
    </option>
    <option>
        Option 3
    </option>
  </Select>
)

select.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Select.test.jsx'],
  },
}
