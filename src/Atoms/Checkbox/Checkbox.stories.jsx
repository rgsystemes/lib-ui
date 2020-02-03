import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Checkbox from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Checkbox',
}

export const checkbox = () => (
  <FormControlLabel
    control={<Checkbox onChange={action('Checkbox changed')}/>}
    label={text('Label', 'Checkbox')}
  />
)
checkbox.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
