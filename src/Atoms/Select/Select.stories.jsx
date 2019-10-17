import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import Select from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Select',
}

const Container = styled.div`
  ${({ openOnTop }) => openOnTop ? 'margin-top: 200px;' : ''}
`

export const select = () => {
  const openOnTop = boolean('open on top', false)

  return (
    <Container openOnTop={openOnTop}>
      <Select
        openOnTop={openOnTop}
        label={text('label', 'Select...')}
        onChange={action('change')}
        options={['1', '2', '3', '4', '5'].map(n => ({ value: n, label: `option ${n}` }))}
      />
    </Container>
  )
}

select.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Select.test.jsx'],
  },
}
