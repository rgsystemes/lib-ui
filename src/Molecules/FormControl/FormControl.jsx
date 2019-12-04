import styled, { css } from 'styled-components'
import BaseFormControl from '@material-ui/core/FormControl'

export const formControlStyles = css`
  &.MuiFormControl-root {
    margin-top: 15px;
  }
`

const FormControl = styled(BaseFormControl)`
  ${formControlStyles}
`

export default FormControl
