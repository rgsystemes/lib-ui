import React, { forwardRef } from 'react'
import BaseButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const UncoloredButton = forwardRef(({ color, ...props }, ref) => <BaseButton {...props} ref={ref}/>)

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey[600],
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSizes.s,
    textTransform: 'none',
    fontWeight: 'normal',
    '& .circle': {
      fontWeight: 'normal',
      fontSize: '23px',
      lineHeight: '16px',
      border: '2px solid',
      borderColor: theme.palette.grey[600],
      borderRadius: '12px',
      width: '16px',
      height: '16px',
      marginRight: '7px',
    },
  },
}))


const ButtonNoBorder = ({ className, children, ...props }) => {
  return <>
    <UncoloredButton className={useStyles().root} { ...props }>
      <div className={'circle'}>+</div>
      {children}
    </UncoloredButton>
  </>
}

ButtonNoBorder.defaultProps = {
  disableRipple: true,
  disableFocusRipple: true,
}


export default ButtonNoBorder

// TODO fix Warning: Failed prop type: The prop `children` is marked as required in `ForwardRef(Button)`, but its value is `undefined`.
// TODO check the forward ref usage
