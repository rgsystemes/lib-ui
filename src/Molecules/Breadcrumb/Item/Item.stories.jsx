import React from 'react'

import Item from './index'
import markdown from './README.md'

export default {
  title: 'Atoms/Item',
}

export const item = () => (
  <Item />
)

item.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Item.test.jsx'],
  },
}
