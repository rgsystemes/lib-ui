import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    color:         theme.palette.grey[600],
    fontFamily:    theme.typography.fontFamily,
    fontSize:      theme.typography.fontSizes.s,
    textTransform: 'none',
    fontWeight:    'normal',
    '& .circle':   {
      fontWeight:   'normal',
      fontSize:     '23px',
      lineHeight:   '16px',
      border:       '2px solid',
      borderColor:  theme.palette.grey[600],
      borderRadius: 12,
      width:        16,
      height:       16,
      marginRight:  7,
    },
  },
}))
const ButtonNoBorder = ({ className, children, ...props }) => {
  const classes = useStyles()
  return <Button classes={classes} { ...props }>
      <div className={'circle'}>+</div>
      {children}
  </Button>
}

ButtonNoBorder.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default ButtonNoBorder
