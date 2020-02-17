import styled from 'styled-components'
import BasePopover from '@material-ui/core/Popover'
import { css } from '@styled-system/css'
import { space, layout } from 'styled-system'

const Popover = styled(BasePopover)`
  .MuiPopover-paper {
    box-sizing: border-box;
    ${css({ border: '1px solid', borderColor: 'lightgrey' })};
    ${layout}
    ${space}
  }
`

Popover.defaultProps = {
  width: '350px',
  px:    'xl',
  pt:    'xl',
  pb:    'l',
}

export default Popover
