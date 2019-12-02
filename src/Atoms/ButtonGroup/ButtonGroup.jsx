import styled from 'styled-components'
import BaseButtonGroup from '@material-ui/core/ButtonGroup'

const ButtonGroup = styled(BaseButtonGroup)`
  & > .MuiInputBase-root  {
    &:first-child > .MuiInputBase-input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:first-child):not(:last-child) > .MuiInputBase-input {
      border-radius: 0;
    }

    &:last-child > .MuiInputBase-input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`

ButtonGroup.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default ButtonGroup
