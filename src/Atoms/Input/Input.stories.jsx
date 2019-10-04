import React from 'react'

import Input from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Input',
}

export const input = () => (
  <Input />
)
input.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Input.test.jsx'],
  },
}
