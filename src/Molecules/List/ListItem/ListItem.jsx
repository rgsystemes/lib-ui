import React from 'react'
import BaseListItem from '@material-ui/core/ListItem'

const ListItem = ({ button = false, disableRipple = false, disableTouchRipple = false, ...props }) => (
  <BaseListItem
    button={button}
    disableRipple={!!button || disableRipple}
    disableTouchRipple={!!button || disableTouchRipple}
    {...props}
  />
)

export default ListItem
