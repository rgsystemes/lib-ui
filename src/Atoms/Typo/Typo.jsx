import styled from 'styled-components'
import { typography, color } from 'styled-system'

const Typo = styled.span`
  ${typography}
  ${color}
`

Typo.defaultProps = {
  color:      'text',
  fontFamily: 'body',
  lineHeight: 'body',
  fontSize:   'body',
}

export default Typo
