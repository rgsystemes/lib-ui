import React from 'react'
import styled from 'styled-components'
import NativeSelect from '@material-ui/core/NativeSelect'
import { css } from '@styled-system/css'

import Input from '../Input'

const Select = styled(NativeSelect)`

  .MuiNativeSelect-select {
    &.MuiInputBase-input {
      ${css({ paddingRight: 'xl' })};
    }
    &:focus {
      background-color: transparent;
      ${css({ borderRadius: '1' })};
    }
  }
`

Select.defaultProps = {
  input: <Input />,
}

export default Select
