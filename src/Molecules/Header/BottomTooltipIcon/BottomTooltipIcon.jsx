import React, { forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Icon from '../../../Atoms/Icon'
import Tooltip from '../../../Atoms/Tooltip'

const iconStyles = makeStyles({
  root: {
    padding: 0,
    margin:  12,
  },
})

const BottomTooltipIcon = forwardRef(({
  children,
  title = null,
  ...props
}, ref) => (
  <Tooltip placement="bottom" title={title}>
    <Icon ref={ref} classes={iconStyles()} {...props}>
      {children}
    </Icon>
  </Tooltip>
))

export default BottomTooltipIcon
