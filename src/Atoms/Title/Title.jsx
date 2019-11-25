import styled from 'styled-components'
import { space } from 'styled-system'
import Typo from '../Typo'

const Title = styled(Typo)`
  ${space}
  &::first-letter {
    text-transform: uppercase;
  }
`

Title.defaultProps = {
  as:         'h4',
  my:         'm',
  fontSize:   'l',
  fontWeight: 'normal',
  lineHeight: 'heading',
}

export default Title
