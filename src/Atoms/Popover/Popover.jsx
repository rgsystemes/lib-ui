import styled from 'styled-components'
import BasePopover from '@material-ui/core/Popover'
import { css } from '@styled-system/css'
import { layout } from 'styled-system'

const Popover = styled(BasePopover)`
  .MuiPopover-paper {
    ${css({ border: '1px solid', borderColor: 'lightgrey', maxHeight: '440px' })};
    ${layout}
  }
`

Popover.defaultProps = {
  width: '350px',
}

export default Popover
