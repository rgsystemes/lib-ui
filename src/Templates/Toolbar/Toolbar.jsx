import styled from 'styled-components'
import { color, border, shadow } from 'styled-system'

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  ${color}
  ${border}
  ${shadow}
`

Toolbar.defaultProps = {
  bg:        'lightgray',
  boxShadow: 'toolbar',
}

export default Toolbar
