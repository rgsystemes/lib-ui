import styled from 'styled-components'
import { css } from '@styled-system/css'
import BaseTableCell from '@material-ui/core/TableCell'

const TableCell = styled(BaseTableCell)`
  &.MuiTableCell-sizeSmall {
    ${css({ py: 'm' })}
  }

  &.MuiTableCell-root:not(.MuiTableCell-head) {
    border-bottom: 0;
    border-top: 1px solid rgba(224, 224, 224, 1);
  }

  &.MuiTableCell-head {
    ${css({ py: 'l' })}
  }
`

export default TableCell
