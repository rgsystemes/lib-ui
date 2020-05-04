import React, { forwardRef } from 'react'
import { MenuItem } from '@material-ui/core'

import InnerOption from '../InnerOption'

const Option = forwardRef(({
  native,
  children,
  description,
  ...props
}, ref) => (
  native ? <option {...props}>{children}</option> : <MenuItem ref={ref} {...props}>
    <InnerOption children={children} description={description} />
  </MenuItem>
))

export default Option
