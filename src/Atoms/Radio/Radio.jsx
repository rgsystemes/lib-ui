import styled from 'styled-components'
import { css } from '@styled-system/css'
import BaseRadio from '@material-ui/core/Radio'

const Radio = styled(BaseRadio)`
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

Radio.defaultProps = {
  disableRipple: true,
  color:         'default',
  size:          'small',
}

export default Radio
