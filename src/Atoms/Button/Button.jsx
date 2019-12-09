import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import { css as systemCss } from '@styled-system/css'
import BaseButton from '@material-ui/core/Button'

const variants = {
  danger: {
    background:  '#d9534f',
    color:       '#fff',
    borderColor: '#d43f3a',
    '&:hover':   {
      background:  '#c9302c',
      borderColor: '#ac2925',
    },
  },
  warning: {
    background:  '#f0ad4e',
    color:       '#fff',
    borderColor: '#eea236',
    '&:hover':   {
      background:  '#ec971f',
      borderColor: '#d58512',
    },
  },
  success: {
    background:  '#5cb85c',
    color:       '#fff',
    borderColor: '#4cae4c',
    '&:hover':   {
      background:  '#449d44',
      borderColor: '#398439',
    },
  },
  info: {
    background:  '#5bc0de',
    color:       '#fff',
    borderColor: '#46b8da',
    '&:hover':   {
      background:  '#31b0d5',
      borderColor: '#269abc',
    },
  },
  primary: {
    background:  '#d9edf7',
    color:       '#31708f',
    borderColor: '#bce8f1',
    '&:hover':   {
      background:  '#c9302c',
      borderColor: '#ac2925',
    },
  },
  default: {
    background:  '#fff',
    color:       '#333',
    borderColor: '#ccc',
    '&:hover':   {
      background:  '#e6e6e6',
      borderColor: '#adadad',
    },
  },
}

export const defaultButtonStyles = css`
  &.MuiButton {
    &-root {
      padding: 6px 12px;
      ${systemCss({ fontSize: 'body' })};
      line-height: 1.42857143;

      & > .MuiButton-label {
        ${systemCss({ fontFamily: 'body' })};
      }

      &.Mui-disabled {
        ${variant({ prop: 'color', variants })};
        opacity: 0.65;
      }

      text-transform: none;
      ${variant({ prop: 'color', variants })};

      &:hover {
        ${variant({ prop: 'color', variants })};
      }
    }
  }
`
export const smallButtonStyles =  css`
  &.MuiButton-sizeSmall {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
  }
`
export const largeButtonStyles = css`
  &.MuiButton-sizeLarge {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
  }
`

const Button = styled(BaseButton)`
  ${defaultButtonStyles}
  ${largeButtonStyles}
  ${smallButtonStyles}
`

Button.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
  color:              'default',
  variant:            'outlined',
}

export default Button
