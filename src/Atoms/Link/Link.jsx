import React from 'react'
import { Box, Link as BaseLink } from '@material-ui/core'

const Link = ({ children, ...props }) => (
  <Box fontFamily="fontFamily">
    <BaseLink style={{ color: '#337AB7' }} {...props}>
      { children }
    </BaseLink>
  </Box>
)

export default Link
