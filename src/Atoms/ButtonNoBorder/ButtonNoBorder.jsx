import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddCircleOutline } from 'styled-icons/material/AddCircleOutline'

const useStyles = makeStyles(theme => ({
  root: {
    color:         theme.palette.grey[600],
    fontFamily:    theme.typography.fontFamily,
    fontSize:      theme.typography.fontSizes.s,
    textTransform: 'none',
    fontWeight:    'normal',
    '& .circle':   {
      marginRight: 6,
    },
  },
}))
const ButtonNoBorder = ({ className, children, ...props }) => {
  const classes = useStyles()
  return <Button classes={classes} { ...props }>
    <AddCircleOutline className="circle" size={26} />
    {children}
  </Button>
}

ButtonNoBorder.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default ButtonNoBorder
