import styled from 'styled-components'
import BaseListItem from '@material-ui/core/ListItem'

const ListItem = styled(BaseListItem)`
`

ListItem.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default ListItem
