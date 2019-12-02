import styled from 'styled-components'
import { css } from '@styled-system/css'
import BaseFormHelperText from '@material-ui/core/FormHelperText'

const FormHelperText = styled(BaseFormHelperText)`
  &.MuiFormHelperText {
    &-root {
      ${css({
    marginTop:    'm',
    marginBottom: 'm',
    color:        'text',
    fontFamily:   'body',
    fontSize:     'body',
  })};
    }
  }
`

export default FormHelperText
