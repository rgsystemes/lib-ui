import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import FilterWrapper from './index'
import FormControl, { InputLabel } from '../FormControl'
import Input from '../../Atoms/Input'

import markdown from './README.md'

export default {
  title: 'Molecules/FilterWrapper',
}

export const filterWrapper = () => (
  <FilterWrapper onClear={action('filter cleared')} >
    <FormControl>
      <InputLabel>
      Name
        <Input placeholder="Obi-wan Kenobi" onBlur={action('filter triggered')}/>
      </InputLabel>
    </FormControl>
  </FilterWrapper>
)
filterWrapper.story = {
  parameters: {
    notes: { markdown },
    jest:  ['FilterWrapper.test.jsx'],
  },
}
