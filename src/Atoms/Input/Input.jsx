import styled, { css } from 'styled-components'
import { css as systemCss } from '@styled-system/css'
import BaseInput from '@material-ui/core/Input'

const sizes = {
  large: css`
    & {
      height: 46px;
    }
    .MuiInputBase-input {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
    }
  `,
  small: css`
    & {
      height: 30px;
    }
    .MuiInputBase-input {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
  `,
}

export const inputStyles = ({ size }) => css`
  &.MuiInputBase-root  {
    .MuiInputBase-input {
      ${systemCss({ px: 'l', py: 'm', lineHeight: '1', fontSize: 'body' })}
    }
    &.Mui-focused {
      ${systemCss({ boxShadow: '0 0px 8px #66afe9', borderColor: '#66afe9' })}
    }
    &.Mui-disabled {
      ${(systemCss({ color: 'lightgrey' }))};
    }
  }

  &.Mui-error.MuiInputBase-root {
    ${systemCss({ color: '#a94442', borderColor: '#a94442' })}
    &.Mui-focused {
      ${systemCss({ boxShadow: '0 0 8px #ce8483' })}
    }
  }

  &.MuiInputBase-root {
    height: 34px;
    transition: all 0.1s ease-out;
    transition-property: box-shadow, border-color, color;
    ${systemCss({
    position:     'relative',
    borderRadius: '1',
    border:       '1px solid',
    borderColor:  'lightgrey',
    color:        'text',
  })};
  }

  &.MuiInput-underline {
    &:after, &:before, &.MuiInput-underline:hover:before, &.MuiInput-underline:hover:after {
      border: 0;
    }
  }

  &.MuiInputBase-root {
    ${size in sizes ? sizes[size] : ''};
  }
`

const Input = styled(BaseInput)`
  ${inputStyles}
`

export default Input
