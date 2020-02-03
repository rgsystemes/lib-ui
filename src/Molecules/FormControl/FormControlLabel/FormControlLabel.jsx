import styled from 'styled-components'
import { css } from '@styled-system/css'
import BaseFormControlLabel from '@material-ui/core/FormControlLabel'

const FormControlLabel = styled(BaseFormControlLabel)`
  & .MuiTypography-root {
    ${css({
    fontFamily: 'body',
    fontSize:   'body',
  })}
  }

  &.MuiFormControlLabel-root:first-child {
    ${css({ mt: 'm' })}
  }
`

export default FormControlLabel
