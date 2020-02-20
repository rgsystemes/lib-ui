import styled, { css } from 'styled-components'
import { css as systemCss } from '@styled-system/css'
import BaseInputAdornment from '@material-ui/core/InputAdornment'
import { iconButtonStyles } from '../../IconButton'

export const inputAdornmentStyles = css`
  &.MuiInputAdornment-root {
    height: 100%;
    max-height: 100%;
    background-color: #eee;

    &:first-child {
      border-right: 1px solid;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      ${systemCss({ borderColor: 'lightgrey' })};
    }

    &:last-child {
      border-left: 1px solid;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      ${systemCss({ borderColor: 'lightgrey' })};
    }

    ${systemCss({ borderColor: 'lightgrey' })};
    ${iconButtonStyles};
  }
`

const InputAdornment = styled(BaseInputAdornment)`
  ${inputAdornmentStyles}
`

export default InputAdornment
