import styled from 'styled-components'
import { css } from '@styled-system/css'
import BaseListItemText from '@material-ui/core/ListItemText'

const ListItemText = styled(BaseListItemText)`
  &.MuiListItemText-root {
    margin-top: 0;
  }

  .MuiTypography-root {
    ${css({ fontFamily: 'body' })}
  }
`

export default ListItemText
