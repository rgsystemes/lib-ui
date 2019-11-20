import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import PageTitle from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/PageTitle',
}

export const pageTitle = () => (
  <PageTitle>
    I'm a title
  </PageTitle>
)

pageTitle.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
