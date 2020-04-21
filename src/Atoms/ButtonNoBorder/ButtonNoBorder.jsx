import React from 'react'
import Button from '@material-ui/core/Button'
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
      borderRadius: '12px',
      width:        '16px',
      height:       '16px',
      marginRight:  '7px',
    },
  },
}))
const ButtonNoBorder = ({ className, children, ...props }) => {
  const classes = useStyles()
  return <>
    <Button classes={classes} { ...props }>
      <div className={'circle'}>+</div>
      {children}
    </Button>
  </>
}

ButtonNoBorder.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default ButtonNoBorder
