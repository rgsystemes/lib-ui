import React from 'react'
import styled from 'styled-components'

import Box from '@material-ui/core/Box'
import { useTheme } from '@material-ui/core'

const GappedBox = styled(Box)`
  & > *:not(:last-child) {
    ${({ gap }) => gap}
  }
`

const useGap = (gap, direction) => {
  const theme = useTheme()
  const key = direction === 'column' ? 'margin-bottom' : 'margin-right'
  const value = theme.spacing(gap)
  return `${key}: ${value}px;`
}

const FlexBox = ({ gap = 0, ...props }) => {
  gap = useGap(gap, props.flexDirection)

  return <GappedBox display="flex" gap={gap} {...props} />
}

export default FlexBox
