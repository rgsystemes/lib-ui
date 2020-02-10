import styled from 'styled-components'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import Pagination from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Pagination',
}

const Container = styled.div`
  ${({ openOnTop }) => openOnTop ? 'margin-top: 200px;' : ''}
`

export const pagination = () => {
  const label = text('label', '1 - 10 of 250')
  const openOnTop = boolean('open on top', false)

  return (
    <Container openOnTop={openOnTop}>
      <Pagination
        label={label}
        openOnTop={openOnTop}

        currentPage={1}
        sizeOptions={['10', '20', '30', '40']}

        onPageChange={action('page changed')}
        onSizeChange={action('size changed')}
      />
    </Container>
  )
}

pagination.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Pagination.test.jsx'],
  },
}
