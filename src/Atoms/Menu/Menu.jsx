import styled from 'styled-components'
import BaseMenu from '@material-ui/core/Menu'
import { css } from '@styled-system/css'

const Menu = styled(BaseMenu)`
  .MuiMenu-paper {
    ${css({ border: '1px solid', borderColor: 'lightgrey' })};
  }

  .MuiMenuItem-root {
    ${css({ fontSize: 'body', py: 's' })}
  }
`

Menu.defaultProps = {
  elevation:    6,
  anchorOrigin: {
    vertical: 'bottom',
  },
  getContentAnchorEl: null,
}

export default Menu
