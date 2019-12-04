import styled from 'styled-components'
import BaseTextField from '@material-ui/core/TextField'
import { inputStyles } from '../Input'
import { inputAdornmentStyles } from '../Input/InputAdornment'
import { formLabelStyles } from '../../Molecules/FormControl/FormLabel'
import { formHelperTextStyles } from '../../Molecules/FormControl/FormHelperText'
import { formControlStyles } from '../../Molecules/FormControl'

const TextField = styled(BaseTextField)`
  & > {
    ${inputStyles};
    
    &.MuiInput-root > {
      ${inputAdornmentStyles};
    }

    ${formLabelStyles}
    ${formHelperTextStyles}
  }

  ${formControlStyles}
`

TextField.defaultProps = {
  size:            'medium',
  InputLabelProps: {
    shrink: true,
  },
}

export default TextField
