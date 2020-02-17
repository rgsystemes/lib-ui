import React from 'react'
import BaseTooltip from '@material-ui/core/Tooltip'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  arrow: {
    color: 'black',
  },
  tooltip: {
    backgroundColor: 'black',
    fontSize:        theme.typography.fontSizes.xs,
  },
}))

const Tooltip = props => {
  const classes = useStyles()

  return <BaseTooltip classes={classes} {...props} />
}

Tooltip.defaultProps = {
  arrow:     true,
  placement: 'top',
}

export default Tooltip
