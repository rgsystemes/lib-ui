import React from 'react'
import { text } from '@storybook/addon-knobs'

import Title from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Title',
}

export const title = () => (
  <Title>{text('text', 'some title')}</Title>
)
title.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Title.test.jsx'],
  },
}
