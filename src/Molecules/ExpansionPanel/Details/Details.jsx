import React from 'react'
import styled from 'styled-components'
import { border, space } from 'styled-system'

import DetailsBase from '@material-ui/core/ExpansionPanelDetails'

const CleanDetailsBase = ({ borderColor, ...props }) => <DetailsBase {...props} />

const Details = styled(CleanDetailsBase)`
  && {
    border-top: 1px solid;
    ${border}
    ${space}
  }
`
Details.defaultProps = {
  px:          'l',
  py:          'l',
  borderColor: 'lightgray',
}

export default Details
