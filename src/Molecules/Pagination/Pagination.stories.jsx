import React from 'react'
import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'

import Pagination from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Pagination',
}

export const pagination = () => <>
  <Pagination
    DisplayValue={({ from, to, total }) => `${from} - ${to} sur ${total}`}
    DisplayOption={({ count }) => `${count} par page`}

    onPageChange={action('page changed')}
    onSizeChange={action('size changed')}

    size={number('Page size', 10, { min: 1, step: 1 })}
    total={number('Result count', 10, { min: 1, step: 1 })}
    currentPage={number('Current page', 1, { min: 1, step: 1 })}
    sizeOptions={['10', '20', '30', '40']}
  />
  <br/>
  <Pagination
    DisplayValue={({ from, to, total }) => `${from} - ${to} of ${total}`}
    DisplayOption={({ count }) => `${count} per page`}

    onPageChange={action('page changed')}
    onSizeChange={action('size changed')}

    size={number('Page size', 10, { min: 1, step: 1 })}
    total={number('Result count', 10, { min: 1, step: 1 })}
    currentPage={number('Current page', 1, { min: 1, step: 1 })}
    sizeOptions={['10', '20', '30', '40']}
  />
</>

pagination.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Pagination.test.jsx'],
  },
}
