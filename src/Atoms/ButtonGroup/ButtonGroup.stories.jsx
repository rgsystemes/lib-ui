import React from 'react'
import styled from 'styled-components'

import { Heart } from 'styled-icons/feather/Heart'
import { Star } from 'styled-icons/feather/Star'
import { Home } from 'styled-icons/feather/Home'

import ButtonGroup from './index'

import Button from '../Button'

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
      <ButtonGroup key={size} size={size}>
        <Button>{size}</Button>
        <Button color="info">{size}</Button>
        <Button color="success">{size}</Button>
        <Button color="warning">{size}</Button>
        <Button color="danger">{size}</Button>
      </ButtonGroup>
    )}
    <ButtonGroup size="small">
      <Button variant="outlined">
        <Heart size={18} />
      </Button>
      <Button variant="outlined">
        <Star size={18} />
      </Button>
      <Button variant="outlined">
        <Home size={18} />
      </Button>
    </ButtonGroup>
  </Container>
)
ButtonGroup.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
