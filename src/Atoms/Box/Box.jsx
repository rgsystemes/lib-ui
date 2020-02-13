import styled from 'styled-components'
import { style } from '@material-ui/system'

import MuiBox from '@material-ui/core/Box'

const boxSizing = style({
  prop: 'boxSizing',
})

const Box = styled(MuiBox)`
  ${boxSizing}
`

export default Box
