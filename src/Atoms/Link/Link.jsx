import React from 'react'
import { Link as BaseLink } from '@material-ui/core'

import Typo from '../Typo'

const Link = ({ ...props }) => (
  <Typo>
    <BaseLink underline="hover" {...props} style={{ color: '#337AB7' }} />
  </Typo>
)

export default Link
