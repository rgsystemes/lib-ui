import React from 'react'
import { action } from '@storybook/addon-actions'

import IconButton from './index'
import { Heart } from 'styled-icons/feather/Heart'
import { Star } from 'styled-icons/feather/Star'
import { Home } from 'styled-icons/feather/Home'

import markdown from './README.md'

export default {
  title: 'Atoms/IconButton',
}

const Icons = [Heart, Star, Home]

export const iconButton = () => (
  Icons.map((Icon, index) =>
    <IconButton key={index} onClick={action('icon clicked')}>
      <Icon size={20} />
    </IconButton>,
  )
)
iconButton.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
