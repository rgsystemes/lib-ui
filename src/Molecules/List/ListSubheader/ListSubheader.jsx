import styled from 'styled-components'
import { css } from '@styled-system/css'
import BaseListSubheader from '@material-ui/core/ListSubheader'

const ListSubheader = styled(BaseListSubheader)`
  &.MuiListSubheader-root {
    ${css({ color: 'text', fontWeight: 'bold', fontFamily: 'body' })}
  }
`

export default ListSubheader
