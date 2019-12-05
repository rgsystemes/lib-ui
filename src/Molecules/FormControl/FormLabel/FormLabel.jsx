import styled, { css } from 'styled-components'
import BaseFormLabel from '@material-ui/core/FormLabel'
import { css as systemCss } from '@styled-system/css'

export const formLabelStyles = css`
  &.MuiFormLabel-root {
    position: unset;
    transform: scale(1);
    &.Mui-focused:not(.Mui-error) {
      ${systemCss({ color: 'text' })};
    }

    &.Mui-error {
      color: #a94442;
    }

    ${systemCss({ fontSize: 'body', fontWeight: 'bold', color: 'text' })};
  }
`

const FormLabel = styled(BaseFormLabel)`
  ${formLabelStyles}
`

export default FormLabel
