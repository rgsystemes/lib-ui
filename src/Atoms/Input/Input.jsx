import styled from 'styled-components'
import { color, border, space, typography } from 'styled-system'

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid;
  ${color}
  ${border}
  ${space}
  ${typography}
`

Input.defaultProps = {
  color:        'text',
  bg:           'background',
  borderColor:  'midgray',
  px:           'l',
  py:           'm',
  borderRadius: '1',
  lineHeight:   '1',
}

export default Input
