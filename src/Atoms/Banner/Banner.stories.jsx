import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'

import Container from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Banner',
}

export const banner = () => (
  <Container
    level={select('level', {
      error:   'error',
      warning: 'warning',
      success: 'success',
      info:    'info',
    }, 'info')}
    title={text('title', 'some title')}
    children={text('message', 'Text message')}
  />
)

banner.story = {
  parameters: {
    notes: { markdown },
  },
}

export const closableBanner = () => (
  <Container
    onClose={action('close')}
    level={select('level', {
      error:   'error',
      warning: 'warning',
      success: 'success',
      info:    'info',
    }, 'info')}
    title={text('title', 'some title')}
    children={text('message', 'Text message')}
  />
)

closableBanner.story = {
  parameters: {
    notes: { markdown },
  },
}
