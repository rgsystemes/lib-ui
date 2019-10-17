import styled from 'styled-components'
import css from '@styled-system/css'
import Input from '../Input'

const Button = styled(Input)`
  cursor: pointer;
  &:hover {
    ${css({ bg: 'midgray', borderColor: 'lightgray' })};
  }
`

Button.defaultProps = { as: 'button' }

export default Button
