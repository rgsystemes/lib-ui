import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'

import Button from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Button',
}

const colors = ['default', 'success', 'info', 'danger', 'warning']
const sizes = ['large', 'medium', 'small']
const Row = styled.div`
  display: flex;
  flex-direction: row;
  & > ${Button} {
    margin-left: 10px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > ${Row} {
    margin-top: 10px;
  }
`

export const button = () => (
  <Container>
    {sizes.map(size =>
      <Row>
        {colors.map(color =>
          <Button onClick={action('clicked')} color={color} size={size} disabled={boolean('Disabled', false)}>
            {size.charAt(0).toUpperCase() + size.slice(1)} button
          </Button>
        )}
      </Row>
    )}
  </Container>
)

button.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Button.test.jsx'],
  },
}
