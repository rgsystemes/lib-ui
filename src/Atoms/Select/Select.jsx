import React from 'react'
import styled from 'styled-components'
import NativeSelect from '@material-ui/core/NativeSelect'
import { css } from '@styled-system/css'

import Input from '../Input'

const Select = styled(NativeSelect)`
  .MuiNativeSelect {
    &-root { 
      ${css({ bg: 'background' })};
    }

    &-select {
      ${css({ borderRadius: '1' })};

      &.MuiInputBase-input {
        ${css({ paddingRight: 'xl' })};
      }

      &:focus {
        ${css({ bg: 'background' })};
        ${css({ borderRadius: '1' })};
      }
    }
  }
`

Select.defaultProps = {
  input: <Input />,
}

export default Select
