import styled, { css } from 'styled-components'
import { css as systemCss } from '@styled-system/css'
import BaseFormHelperText from '@material-ui/core/FormHelperText'

export const formHelperTextStyles = css`
  &.MuiFormHelperText-root {
    ${systemCss({
    marginTop:    'm',
    marginBottom: 'm',
    color:        'text',
    fontFamily:   'body',
    fontSize:     'body',
  })};

    &.Mui-error {
      color: #a94442;
    }
  }
`

const FormHelperText = styled(BaseFormHelperText)`
  ${formHelperTextStyles}
`

export default FormHelperText
