import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import EmptyPlaceholder from './index'
import { JediOrder } from 'styled-icons/fa-brands/JediOrder'
import Button from '../../Atoms/Button'

import markdown from './README.md'

export default {
  title: 'Molecules/EmptyPlaceholder',
}

export const emptyPlaceholder = () => (
  <EmptyPlaceholder
    icon={<JediOrder size={98} />}
    primaryText="Il n'y a pas encore de jedis définis sur ce monde"
    secondaryText="Les jedis que vous allez créer sur ce monde vont apparaitre ici"
    action={
      <Button onClick={action('Empty placeholder button clicked')} color="success" size="large">
        Do something
      </Button>
    }
    empty
  />
)
emptyPlaceholder.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
