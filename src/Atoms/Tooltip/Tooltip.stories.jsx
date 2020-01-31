import React from 'react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'

import Tooltip from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Tooltip',
}

const Wrapper = styled.div`
  margin: 150px;
`

const Element = styled.div`
  display      : inline-block;
  border       : 1px solid black;
  padding      : 5px;
`

export const tooltip = () => (
  <Wrapper>
    <Tooltip title={text('tip', 'tip')} open={true} placement="top">
      <Element>Element</Element>
    </Tooltip>
  </Wrapper>
)
tooltip.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Tooltip.test.jsx'],
  },
}
