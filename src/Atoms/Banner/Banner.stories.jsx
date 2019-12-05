import React, { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'

import Banner from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Banner',
}

export const banner = () => (
  <Banner
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

export const closableBanner = () => {
  const [closed, setClosed] = useState(false)
  useEffect(
    () => {
      const intervalID = setInterval(() => setClosed(false), 5000)
      return () => clearInterval(intervalID)
    },
    []
  )

  return !closed && <Banner
    onClose={() => {
      action('close')
      setClosed(true)
    }}
    level={select('level', {
      error:   'error',
      warning: 'warning',
      success: 'success',
      info:    'info',
    }, 'info')}
    title={text('title', 'some title')}
    children={text('message', 'Text message')}
  />
}

closableBanner.story = {
  parameters: {
    notes: { markdown },
  },
}
