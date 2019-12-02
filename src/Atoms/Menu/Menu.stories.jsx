import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'

import Button from '../Button'
import Menu from './index'
import MenuItem from './MenuItem'

import markdown from './README.md'

export default {
  title: 'Atoms/Menu',
}

const Container = styled.div`
  height: 400px;
  margin-top: ${({ openOnTop }) => openOnTop ? '150px' : '0'};
`

export const menu = () => {
  const [anchorEl, setAnchorEl] = useState()
  const openOnTop = boolean('Open on top', false)

  return <Container openOnTop={openOnTop}>
    <Button onClick={event => setAnchorEl(event.currentTarget)}>
      Toggle menu
    </Button>
    <Menu
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{ vertical: openOnTop ? 'top' : 'bottom' }}
      transformOrigin={{ vertical: openOnTop ? 'bottom' : 'top' }}
    >
      <MenuItem>
        Action
      </MenuItem>
      <MenuItem>
        AnotherAction
      </MenuItem>
      <MenuItem>
        Something else here
      </MenuItem>
    </Menu>
  </Container>
}
menu.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Menu.test.jsx'],
  },
}
