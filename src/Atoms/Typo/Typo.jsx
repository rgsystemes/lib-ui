import styled from 'styled-components'
import { typography, color, space } from 'styled-system'

const Typo = styled.span`
  ${typography}
  ${color}
  ${space}
`

Typo.defaultProps = {
  color:      'text',
  fontFamily: 'body',
  lineHeight: 'body',
  fontSize:   'body',
}

export default Typo
