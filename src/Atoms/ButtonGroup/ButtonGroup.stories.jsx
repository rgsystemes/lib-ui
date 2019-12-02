import React from 'react'

import ButtonGroup from './index'

import Button from '../Button'
import Input from '../Input'

import markdown from './README.md'

export default {
  title: 'Atoms/ButtonGroup',
}

export const buttonGroup = () => (
  <ButtonGroup>
    <Button>Test</Button>
    <Button color="info">Test</Button>
    <Button color="success">Test</Button>
    <Button color="warning">Test</Button>
    <Button color="danger">Test</Button>
    <Input placeholder="Test"/>
  </ButtonGroup>
)
ButtonGroup.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
