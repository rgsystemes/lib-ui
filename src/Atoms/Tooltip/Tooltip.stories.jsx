import React from 'react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'

import Tooltip from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Tooltip',
}

const Wrapper = styled.div`
  margin: 50px;
`

const Element = styled.div`
  display      : inline-block;
  border       : 1px solid black;
  padding      : 5px;
`

export const tooltip = () => (
  <Wrapper>
    <Tooltip text={text('tip', 'tip')}>
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
