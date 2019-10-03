import styled from 'styled-components'
import { border } from 'styled-system'

import Input from '../Input'

const InputGroup = styled.div`
  display:  inline-block;
  border:   1px solid;
  overflow: hidden;
  ${border}

  & > ${Input} {
    border-width: 0;
    border-radius: 0;
  }

  & > ${Input}:not(:last-child) {
    border-right-width: 1px;
  }
`

InputGroup.defaultProps = {
  borderRadius: '1',
  borderColor:  'midgray',
}

export default InputGroup
