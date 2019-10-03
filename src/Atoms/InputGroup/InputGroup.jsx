import styled from 'styled-components'
import { border } from 'styled-system'

import Input from '../Input'

const InputGroup = styled.div`
  display:  inline-block;
  border:   1px solid;
  ${border}

  & > ${Input} {
    border-width:  0;
    border-radius: 0;
    background:    transparent;
  }

  & > ${Input}:not(:last-child) {
    border-right-width: 1px;
  }
`

InputGroup.defaultProps = {
  borderRadius: '1',
  borderColor:  'midgray',
  bg:           'background',
}

export default InputGroup
