import styled from 'styled-components'
import { color, border, space } from 'styled-system'
import css from '@styled-system/css'

const Button = styled.button`
  box-sizing: border-box;
  border: 1px solid;
  ${color}
  ${border}
  ${space}
  &:hover {
    ${css({ bg: 'midgray', borderColor: 'lightgray' })};
  }
`

Button.defaultProps = {
  color:        'text',
  bg:           'background',
  borderColor:  'midgray',
  px:           'l',
  py:           'm',
  borderRadius: '1',
}

export default Button
