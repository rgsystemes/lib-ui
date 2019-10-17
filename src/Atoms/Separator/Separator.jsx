import styled from 'styled-components'

import { Typo } from '../../Atoms'

const Separator = styled(Typo)``

Separator.defaultProps = {
  color:      'midgray',
  lineHeight: 'header',
  children:   '|',
}

export default Separator
