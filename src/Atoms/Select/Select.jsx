import React from 'react'
import styled from 'styled-components'
import NativeSelect from '@material-ui/core/NativeSelect'
import { css } from '@styled-system/css'

import Input from '../Input'
import { useTranslation } from '../Trans'

const BaseSelect = styled(NativeSelect)`
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

const BaseEmpty = () => {
  const t = useTranslation()

  return <option disabled value="">
    {t('global.chooseOption')}
  </option>
}

const Select = ({ Empty = BaseEmpty, children, ...props }) =>
  <BaseSelect {...props}>
    <Empty />
    {children}
  </BaseSelect>

Select.defaultProps = {
  input: <Input />,
}

export default Select
