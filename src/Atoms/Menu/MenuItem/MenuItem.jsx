import styled from 'styled-components'
import BaseMenuItem from '@material-ui/core/MenuItem'
import { css } from '@styled-system/css'

const MenuItem = styled(BaseMenuItem)`
  &.MuiMenuItem-root {
    ${css({ fontFamily: 'body' })};
  }
`

MenuItem.defaultProps = {
  disableRipple: true,
}

export default MenuItem
