import React from 'react'
import { action } from '@storybook/addon-actions'

import Search from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Search',
}

export const search = () => (
  <Search onSearch={action('Search')} />
)
search.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Search.test.jsx'],
  },
}
