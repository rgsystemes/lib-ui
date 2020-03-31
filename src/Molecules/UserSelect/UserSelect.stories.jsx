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
    src:   'https://material-ui.com/static/images/avatar/1.jpg',
  },
  {
    value: 'Dark Vador',
    src:   'https://material-ui.com/static/images/avatar/2.jpg',
  },
]

const avatars = jedis.reduce(
  (acc, { value, src }) => Object.assign(acc, { [value]: src }),
  {},
)

export const userSelect = () => {
  const [value, setValue] = useState([])
  const onChange = event => setValue(event.target.value)

  return <UserSelect
    label="Jedis and not jedis"
    children={jedis}
    value={value}
    onChange={onChange}
    avatars={avatars}
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
