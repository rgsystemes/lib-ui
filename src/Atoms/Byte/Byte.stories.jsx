import React from 'react'
import { number, text } from '@storybook/addon-knobs'
import Byte from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Byte',
}

const defaultUnits = [
  'byte',
  'kenobi',
  'mebi',
  'gibi',
  'tebi',
  'pebi',
  'exbi',
  'zebi',
  'yobi',
]

export const _byte = () => {
  const size = number('size in bytes', 120114)
  const units = defaultUnits.map((unit, id) => text(`${unit} (1024^${id})`, unit))
  return <Byte units={units}>{size}</Byte>
}
_byte.story = {
  parameters: {
    notes: { markdown },
  },
}
