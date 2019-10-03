import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'
import styled from 'styled-components'

import Select from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Select',
}

const Special = styled.div`
  color: #F00;
`

export const select = () => {
  return (
    <Select displayValue='Select...' onChange={action('change')}
      options={[
        { value: '1' },
        { value: '2' },
        { value: '3', Component: Special },
        { value: '4' },
        { value: '5' },
      ]}
    />
  )
}
select.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Select.test.jsx'],
  },
}
