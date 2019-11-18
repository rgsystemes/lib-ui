import React from 'react'
import { action } from '@storybook/addon-actions'
import { select, boolean, text } from '@storybook/addon-knobs'

import Notification, {
  LEVEL_INFO,
  LEVEL_SUCCESS,
  LEVEL_ERROR,
  LEVEL_WARNING,
} from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Notification',
}

const options = {
  Success: LEVEL_SUCCESS,
  Warning: LEVEL_WARNING,
  Info:    LEVEL_INFO,
  Error:   LEVEL_ERROR,
}

export const notification = () => (
  <Notification
    level={select('Level', options)}
    onClose={action('onClose')}
    show={boolean('Show', true)}
    title={text('Title', 'Hello there !')}
  >
    {text('Message', '- General Kenobi')}
  </Notification>
)
notification.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Notification.test.jsx'],
  },
}
