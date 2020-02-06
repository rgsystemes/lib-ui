import React from 'react'
import { Heart } from 'styled-icons/feather/Heart'
import { Star } from 'styled-icons/feather/Star'
import { Home } from 'styled-icons/feather/Home'

import Icon from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Icon',
}

export const icon = () => (
  <>
    <Icon Component={Heart} />
    <Icon Component={Star} />
    <Icon button Component={Home} />
  </>
)
icon.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
