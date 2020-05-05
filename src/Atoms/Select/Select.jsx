import React, { Children } from 'react'
import styled from 'styled-components'
import { Select as MuiSelect } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { css } from '@styled-system/css'

import Option from './Option'
import InnerOption from './InnerOption'
import Input from '../Input'
import { useTranslation } from '../Trans'

const selectStyles = makeStyles(theme => createStyles({
  icon: {
    color:       theme.palette.label.main,
    width:       '0.75em',
    marginRight: 5,
  },
}))

const inputStyles = makeStyles(theme => createStyles({
  root: {
    height:                  'auto !important', // FIXME: refacto input instead
    borderBottomLeftRadius:  '0 !important', // FIXME: refacto input instead
    borderBottomRightRadius: '0 !important', // FIXME: refacto input instead
  },
  input: {
    padding: '6px 16px !important', // FIXME: refacto input instead
    color:   theme.palette.label.main,
  },
  disabled: {
    color: 'currentColor',
  },
}))

const menuStyles = makeStyles({
  paper: {
    marginTop:            1,
    borderTopLeftRadius:  0,
    borderTopRightRadius: 0,
  },
  list: {
    padding: 0,
  },
})

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

const Select = ({
  placeholder = 'global.action.chooseOption',
  children,
  ...props
}) => {
  const selectClasses = selectStyles()
  const inputClasses = inputStyles()
  const menuClasses = menuStyles()
  const t = useTranslation()

  const { native } = props
  const childrenArray = (placeholder ? [<Option disabled key="." value="" native={native}>
    {t(placeholder)}
  </Option>] : []).concat(Children.toArray(children))
  const indexedProps = childrenArray.reduce((acc, child) => Object.assign(acc, { [child.props.value]: child.props }), {})

  return (
    <BaseSelect
      classes={selectClasses}
      displayEmpty={!native}
      input={<Input classes={inputClasses} />}
      MenuProps={{
        getContentAnchorEl: null,
        anchorOrigin:       {
          horizontal: 'left',
          vertical:   'bottom',
        },
        classes: menuClasses,
      }}
      renderValue={value => <InnerOption {...indexedProps[value]} />}
      {...props}
    >
      {childrenArray.map(child => ({
        ...child,
        props: {
          ...child.props,
          native,
        },
      }))}
    </BaseSelect>
  )
}

export default Select
