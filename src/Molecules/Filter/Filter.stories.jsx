import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import Filter from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/Filter',
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 15px;
  }
`

export const filter = () => <Container>
  <Filter
    type="text"
    value=""
    translationKey="Text filter"
    onChange={action('filter changed')}
  />
  <Filter
    type="select"
    options={[
      { name: '1', label: 'Choice 1' },
      { name: '2', label: 'Choice 2' },
    ]}
    value=""
    translationKey="Select filter"
    onChange={action('filter changed')}
  />
  <Filter
    type="date"
    value=""
    translationKey="Date filter"
    onChange={action('filter changed')}
  />
</Container>
filter.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Filter.test.jsx'],
  },
}
