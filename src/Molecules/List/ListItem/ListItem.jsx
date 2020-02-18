import React from 'react'
import BaseListItem from '@material-ui/core/ListItem'

const ListItem = ({ button = false, disableRipple = false, disableTouchRipple = false, ...props }) => {
  if (button) {
    disableRipple = true
    disableTouchRipple = true
  }

  return <BaseListItem button={button} disableRipple={disableRipple} disableTouchRipple={disableTouchRipple} {...props}/>
}

export default ListItem
