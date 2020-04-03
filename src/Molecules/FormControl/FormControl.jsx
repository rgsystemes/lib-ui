import styled, { css } from 'styled-components'
import { css as systemCss } from '@styled-system/css'
import BaseFormControl from '@material-ui/core/FormControl'

export const formControlStyles = css`
  box-sizing: border-box;

  label > *,
  label > .MuiInputBase-root,
  label > .MuiTextField-root,
  label + .MuiInputBase-root {
    ${systemCss({ marginTop: 's' })};
  }
`

const FormControl = styled(BaseFormControl)`
  ${formControlStyles}
`

export default FormControl
