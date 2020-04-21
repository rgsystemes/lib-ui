import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import Select from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Select',
}

export const select = () => {
  const [option, setOption] = useState('')
  const handleChange = event => setOption(event.target.value) || action('change')(event)
  return (
    <Select value={option} onChange={handleChange}>
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
}

select.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Select.test.jsx'],
  },
}
