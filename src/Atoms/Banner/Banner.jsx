import styled from 'styled-components'
import { color, space, border, typography } from 'styled-system'

const Banner = styled.div`
  box-sizing: border-box;
  border: 1px solid;
  ${color}
  ${border}
  ${space}
  ${typography}
`

Banner.defaultProps = {
  fontFamily:   'body',
  color:        'text',
  bg:           'background',
  borderColor:  'error',
  px:           'l',
  py:           'l',
  borderRadius: '1',
  lineHeight:   '1',
}

export default Banner
