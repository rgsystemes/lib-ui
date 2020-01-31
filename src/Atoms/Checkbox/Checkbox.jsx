import styled from 'styled-components'
import { css } from '@styled-system/css'
import BaseCheckbox from '@material-ui/core/Checkbox'

const Checkbox = styled(BaseCheckbox)`
  &.MuiIconButton-root:hover {
    background-color: transparent;
  }

  &.MuiButtonBase-root {
    ${css({ p: 'm', pr: 's', py: 0 })}
  }

  svg {
    width: 16px;
  }
`

Checkbox.defaultProps = {
  disableRipple: true,
  color:         'default',
}

export default Checkbox
