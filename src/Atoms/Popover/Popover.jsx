import styled from 'styled-components'
import BasePopover from '@material-ui/core/Popover'
import { layout } from 'styled-system'

const Popover = styled(BasePopover)`
  .MuiPopover-paper {
    border: 1px solid;
    border-color: lightgrey;
    max-height: 600px;
    ${layout}
  }
`

Popover.defaultProps = {
  width: '350px',
}

export default Popover
