import styled from 'styled-components'
import { space } from 'styled-system'
import css from '@styled-system/css'

const Option = styled.div`
  ${space}
  &:hover {
    ${css({ bg: 'lightgray' })}
  }
`

Option.defaultProps = {
  px: '3',
  py: '1',
}

export default Option
