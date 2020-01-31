import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { Baseball } from 'styled-icons/boxicons-regular/Baseball'

import List from './index'
import ListItemText from './ListItemText'
import ListItemIcon from './ListItemIcon'

import markdown from './README.md'

export default {
  title: 'Molecules/List',
}

const americanLeagues = [
  'Rays', 'Yankees', 'Blue Jays', 'Orioles', 'Red Sox', 'Royals', 'Twins',
  'Tigers', 'Indians', 'White Sox', 'Astros', 'Rangers', 'Angels',
  'Mariners', 'Athletics',
]

export const list = () =>
  <List>
    {americanLeagues.map(league =>
      <ListItem>
        <ListItemIcon>
          <Baseball size={20} />
        </ListItemIcon>
        <ListItemText>
          {league}
        </ListItemText>
      </ListItem>
    )}
  </List>
list.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
