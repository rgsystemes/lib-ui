import React, { Children } from 'react'
import styled from 'styled-components'
import { Select as MuiSelect } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { css } from '@styled-system/css'

import Option from './Option'
import Input from '../Input'
import { useTranslation } from '../Trans'

const selectStyles = makeStyles(theme => createStyles({
  root: {
    backgroundColor: theme.palette.common.white,
  },
  select: {

  },
  icon: {
    color: theme.palette.common.black,
  },
}))

const BaseSelect = styled(MuiSelect)`
  .MuiSelect, .MuiNativeSelect {
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

const Select = ({ placeholder = 'global.action.chooseOption', children, ...props }) => {
  const selectClasses = selectStyles()
  const t = useTranslation()

  const { native } = props

  return (
    <BaseSelect
      classes={selectClasses}
      displayEmpty={!native}
      MenuProps={{
        getContentAnchorEl: null,
        anchorOrigin:       {
          horizontal: 'left',
          vertical:   'bottom',
        },
      }}
      {...props}
    >
      {placeholder && <Option disabled value="" native={native}>
        {t(placeholder)}
      </Option>}
      {Children.toArray(children).map(child => ({
        ...child,
        props: {
          ...child.props,
          native,
        },
      }))}
    </BaseSelect>
  )
}

Select.defaultProps = {
  input: <Input />,
}

export default Select
