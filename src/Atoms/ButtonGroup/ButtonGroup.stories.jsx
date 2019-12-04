import React from 'react'
import styled from 'styled-components'

import ButtonGroup from './index'

import Button from '../Button'
import Input from '../Input'

import markdown from './README.md'

export default {
  title: 'Atoms/ButtonGroup',
}

const sizes = ['large', 'medium', 'small']
const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > .MuiButtonGroup-root {
    margin-top: 10px;
  }
`

export const buttonGroup = () => (
  <Container>
    {sizes.map(size =>
      <ButtonGroup size={size}>
        <Button>{size}</Button>
        <Button color="info">{size}</Button>
        <Button color="success">{size}</Button>
        <Button color="warning">{size}</Button>
        <Button color="danger">{size}</Button>
      </ButtonGroup>
    )}
  </Container>
)
ButtonGroup.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
