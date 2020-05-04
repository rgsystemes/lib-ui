import React, { forwardRef } from 'react'
import { MenuItem } from '@material-ui/core'

const Option = forwardRef(({ native, ...props }, ref) => native ? <option {...props} /> : <MenuItem ref={ref} {...props} />)

export default Option
