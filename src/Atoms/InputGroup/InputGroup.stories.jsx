import React from 'react'

import InputGroup from './index'

import Button from '../Button'

import markdown from './README.md'

export default {
  title: 'Atoms/InputGroup',
}

export const inputGroup = () => (
  <InputGroup>
    <Button>Test</Button>
    <Button color='highlight'>Test</Button>
    <Button>Test</Button>
  </InputGroup>
)
inputGroup.story = {
  parameters: {
    notes: { markdown },
    jest:  ['InputGroup.test.jsx'],
  },
}
