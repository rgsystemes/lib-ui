import React, { useState } from 'react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'

import Button from '../Button'
import Typo from '../Typo'
import Popover from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Popover',
}

const Container = styled.div`
  height: 400px;
  margin-top: ${({ openOnTop }) => openOnTop ? '150px' : '0'};
`

export const popover = () => {
  const [anchorEl, setAnchorEl] = useState()
  const openOnTop = boolean('Open on top', false)

  return <Container openOnTop={openOnTop}>
    <Button onClick={event => setAnchorEl(event.currentTarget)}>
      Toggle popover
    </Button>
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{ vertical: openOnTop ? 'top' : 'bottom', horizontal: openOnTop ? 'left' : 'right' }}
      transformOrigin={{ vertical: openOnTop ? 'bottom' : 'top', horizontal: openOnTop ? 'right' : 'left' }}
    >
      <Typo>
        Some text
      </Typo>
    </Popover>
  </Container>
}
popover.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Popover.test.jsx'],
  },
}
