import React from 'react'
// import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import Banner from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Banner',
}

export const banner = () => (
  <Banner title={text('title', 'some title')}>{text('message', 'Text message')}</Banner>
)

banner.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Banner.test.jsx'],
  },
}
