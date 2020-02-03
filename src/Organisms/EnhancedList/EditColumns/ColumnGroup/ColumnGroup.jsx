import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import { DragHandle } from 'styled-icons/material/DragHandle'

import { ListItemIcon, ListItemText } from '../../../../Molecules/List'
import Checkbox from '../../../../Atoms/Checkbox'
import IconButton from '../../../../Atoms/IconButton'

const ColumnGroup = ({ label, columns, onChange = () => {}, checked }) =>
  <List
    dense={true}
    subheader={<ListSubheader disableSticky={true} component="div">{label}</ListSubheader>}
  >
    {columns.map(({ name, translationKey, description, show }) =>
      <ListItem disableGutters={true} key={name}>
        <ListItemIcon>
          <Checkbox
            inputProps={{
              'data-testid': `toggle-column-${name}`,
            }}
            onChange={event => onChange(name, event.target.checked)}
            checked={checked}
            color="default"
          />
        </ListItemIcon>
        <ListItemText id={name} primary={translationKey} secondary={description} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="drag">
            <DragHandle size={18} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )}
  </List>

export default ColumnGroup
