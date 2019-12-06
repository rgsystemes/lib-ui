import styled from 'styled-components'
import { border } from 'styled-system'

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
`

ExpansionPanel.defaultProps = {
  borderColor:  'lightgray',
  borderRadius: 1,
}

export default ExpansionPanel
