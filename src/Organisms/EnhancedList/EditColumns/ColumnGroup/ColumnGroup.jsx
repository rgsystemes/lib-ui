import React from 'react'

import List from '@material-ui/core/List'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import { ListItemIcon, ListItemText, ListSubheader, ListItem } from '../../../../Molecules/List'
import Checkbox from '../../../../Atoms/Checkbox'
import Trans from '../../../../Atoms/Trans'

const ColumnGroup = ({
  label,
  columns,
  disableGutters = false,
  onChange = () => {},
  checked,
}) =>
  <List
    dense={true}
    subheader={<ListSubheader disableSticky={true} disableGutters={disableGutters}>{label}</ListSubheader>}
  >
    {columns.map(({ name, translationKey, description, show }) =>
      <ListItem button key={name} onClick={() => onChange(name)} disableGutters={disableGutters}>
        <ListItemIcon>
          <Checkbox checked={checked} color="default" />
        </ListItemIcon>
        <ListItemText
          id={name}
          primary={<Trans>{translationKey}</Trans>}
          secondary={<Trans>{description}</Trans>}
        />
        <ListItemSecondaryAction />
      </ListItem>,
    )}
  </List>

export default ColumnGroup
