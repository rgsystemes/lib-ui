import React from 'react'
import styled from 'styled-components'
import { text } from '@storybook/addon-knobs'

import { Typo } from '../../Atoms'

import Toolbar from './index'

import markdown from './README.md'

export default {
  title: 'Templates/Toolbar',
}

const Item = styled(Typo)`
  padding: 0px 5px;
`

export const toolbar = () => (
  <Toolbar>
    <div>
      <Item>
        {text('Item 1', 'Item 1')}
      </Item>
      <Item>
        {text('Item 2', 'Item 2')}
      </Item>
    </div>
    <div>
      <Item>
        {text('Item 3', 'Item 3')}
      </Item>
      <Item>
        {text('Item 4', 'Item 4')}
      </Item>
    </div>
  </Toolbar>
)
toolbar.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Toolbar.test.jsx'],
  },
}
