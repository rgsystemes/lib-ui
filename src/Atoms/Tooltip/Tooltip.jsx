import React from 'react'
import BaseTooltip from '@material-ui/core/Tooltip'

import { makeStyles } from '@material-ui/core/styles'

const useBootstrapStyles = makeStyles({
  arrow: {
    color: 'black',
  },
  tooltip: {
    backgroundColor: 'black',
  },
})

const Tooltip = props => {
  const classes = useBootstrapStyles()

  return <BaseTooltip classes={classes} {...props} />
}

Tooltip.defaultProps = {
  arrow:     true,
  placement: 'top',
}

export default Tooltip
