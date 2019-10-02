import React from 'react'
import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'

import Pagination from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Pagination',
}

export const pagination = () => (
  <Pagination
    onPrevious={action('previous')}
    onFirst={action('first')}
    onNext={action('Next')}
    size={number('Page size', 10, { min: 1, step: 1 })}
    total={number('Result count', 10, { min: 1, step: 1 })}
    currentPage={number('Current page', 1, { min: 1, step: 1 })}
  />
)
pagination.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Pagination.test.jsx'],
  },
}
