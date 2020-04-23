import React from 'react'
import { Link as BaseLink } from '@material-ui/core'

import Typo from '../Typo'

const Link = ({ ...props }) => (
  <Typo>
    <BaseLink underline="hover" {...props} />
  </Typo>
)

export default Link
