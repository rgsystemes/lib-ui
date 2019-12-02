import styled from 'styled-components'
import BaseFormLabel from '@material-ui/core/FormLabel'
import { css } from '@styled-system/css'

const FormLabel = styled(BaseFormLabel)`
  &.MuiFormLabel-root {
    &.Mui-focused:not(.Mui-error) {
      ${css({ color: 'text' })};
    }

    ${css({ fontSize: 'body', fontWeight: 'bold', color: 'text' })};
  }
`

export default FormLabel
