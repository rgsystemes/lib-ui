import styled, { css } from 'styled-components'
import BaseIconButton from '@material-ui/core/IconButton'

export const iconButtonStyles = css`
  &.MuiIconButton-root:hover {
    background-color: transparent;
  }
`

const IconButton = styled(BaseIconButton)`
  ${iconButtonStyles}
`

IconButton.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default IconButton
