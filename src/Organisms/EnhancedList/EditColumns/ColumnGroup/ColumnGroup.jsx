import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { ListItemIcon, ListItemText, ListSubheader } from '../../../../Molecules/List'
import Checkbox from '../../../../Atoms/Checkbox'

const ColumnGroup = ({ label, columns, onChange = () => {}, checked }) =>
  <List
    dense={true}
    subheader={<ListSubheader disableGutters={true} disableSticky={true} component="div">{label}</ListSubheader>}
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
      </ListItem>
    )}
  </List>

export default ColumnGroup
