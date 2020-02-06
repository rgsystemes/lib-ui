import React from 'react'

import List from '@material-ui/core/List'

import { ListItemIcon, ListItemText, ListSubheader, ListItem } from '../../../../Molecules/List'
import Checkbox from '../../../../Atoms/Checkbox'

const ColumnGroup = ({ label, columns, onChange = () => {}, checked }) =>
  <List
    dense={true}
    subheader={<ListSubheader disableSticky={true} component="div">{label}</ListSubheader>}
  >
    {columns.map(({ name, translationKey, description, show }) =>
      <ListItem button key={name} onClick={() => onChange(name)} data-testid={`toggle-column-${name}`}>
        <ListItemIcon>
          <Checkbox checked={checked} color="default" />
        </ListItemIcon>
        <ListItemText id={name} primary={translationKey} secondary={description} />
      </ListItem>
    )}
  </List>

export default ColumnGroup
