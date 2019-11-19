import styled from 'styled-components'
import { color } from 'styled-system'

const CodeBlock = styled.code`
  display    : inline-block;
  white-space: pre;
  overflow   : auto;
  max-height : 100%;
  max-width  : 100%;
  ${color}
`

CodeBlock.defaultProps = {
  color: 'white',
  bg:    'black',
}

export default CodeBlock
