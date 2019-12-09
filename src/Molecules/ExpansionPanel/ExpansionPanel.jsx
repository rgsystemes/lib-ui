import styled from 'styled-components'
import { border } from 'styled-system'
import { css } from '@styled-system/css'

import ExpansionPanelBase from '@material-ui/core/ExpansionPanel'

const ExpansionPanel = styled(ExpansionPanelBase)`
  && {
    border: 1px solid;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    ${border};
  }
  &&::before {
    display: none;
  }
  &.MuiExpansionPanel-root.Mui-expanded, &.MuiExpansionPanel-root, &.MuiExpansionPanel-root.Mui-expanded:first-child {
    ${css({ my: 'm' })};
  }
`

ExpansionPanel.defaultProps = {
  borderColor:  'lightgray',
  borderRadius: 1,
}

export default ExpansionPanel
