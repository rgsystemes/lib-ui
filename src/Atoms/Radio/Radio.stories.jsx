import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Radio from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Radio',
}

export const radio = () => (
  <FormControlLabel
    control={<Radio onChange={action('Radio changed')}/>}
    label={text('Label', 'RadioButton')}
  />
)
radio.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
