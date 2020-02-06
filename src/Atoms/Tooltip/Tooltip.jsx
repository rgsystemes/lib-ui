import React from 'react'
import BaseTooltip from '@material-ui/core/Tooltip'

import { makeStyles } from '@material-ui/core/styles'

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    color: 'black',
  },
  tooltip: {
    backgroundColor: 'black',
  },
}))

const Tooltip = props => {
  const classes = useStylesBootstrap()

  return <BaseTooltip classes={classes} {...props} />
}

Tooltip.defaultProps = {
  arrow:     true,
  placement: 'top',
}

export default Tooltip
