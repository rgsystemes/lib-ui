import React from 'react'
import ButtonNoBorder from './index'
import markdown from './README.md'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/ButtonNoBorder',
}

export const buttonNoBorder = () => (
  <ButtonNoBorder onClick={action('onClick')}>Add</ButtonNoBorder>
)

buttonNoBorder.story = {
  parameters: {
    notes: { markdown },
  },
}
