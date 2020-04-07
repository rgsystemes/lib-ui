import React, { useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import {  } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import UserSelect from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/UserSelect',
}

const jedis = [
  {
    value: 'Obi Wan Kenobi',
    src:   '//material-ui.com/static/images/avatar/1.jpg',
  },
  {
    value: 'Dark Vador',
    src:   '//material-ui.com/static/images/avatar/2.jpg',
  },
  {
    value: 'Yoda',
    state: 'success',
  },
  {
    value: 'C3PO',
    state: 'warning',
  },
]

const indexByValueFor = key => jedis.reduce(
  (acc, { value, ...rest }) => Object.assign(acc, { [value]: rest[key] }),
  {},
)

const avatars = indexByValueFor('src')
const states = indexByValueFor('state')

export const userSelect = () => {
  const [value, setValue] = useState([])

  return <UserSelect
    label="Jedis and not jedis"
    children={jedis}
    value={value}
    onChange={setValue}
    avatars={avatars}
    states={states}
  >
    {jedis.map(({ value }) =>
      <MenuItem key={value} value={value}>
        {value}
      </MenuItem>,
    )}
  </UserSelect>
}

userSelect.story = {
  parameters: {
    notes: { markdown },
    jest:  ['UserSelect.test.jsx'],
  },
}
