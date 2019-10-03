import React, { useState } from 'react'
import styled from 'styled-components'
import {
  space, typography, border, color, shadow,
} from 'styled-system'

import { useOnClickOutside } from '../../hooks'
import Button from '../Button'
import Option from './Option'

const Container = styled(Button)`
  position: relative;
`

const Options = styled.div`
  ${({ openOnTop }) => openOnTop ? 'bottom: 100%;' : 'top: 100%;'}
  display:    ${({ open }) => open ? 'block' : 'none'};
  position:   absolute;
  border:     1px solid;
  min-width:  160px;
  left:       0;
  text-align: left;
  z-index:    300;

  ${color}
  ${shadow}
  ${typography}
  ${space}
  ${border}
`

Options.defaultProps = {
  px:           '0',
  py:           '1',
  color:        'text',
  fontSize:     '1',
  borderRadius: '1',
  borderColor:  'lightgray',
  boxShadow:    'm',
  bg:           'background',
}

const Selector = ({
  displayValue, options = [], openOnTop, onChange,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const ref = useOnClickOutside(() => setOpen(false))

  return (
    <Container {...props} ref={ref} onClick={() => setOpen(!open)}>
      {displayValue}
      <Options open={open} openOnTop={openOnTop}>
        {options.map(props => (
          <Option {...props} onChange={value => {
            onChange(value)
            setOpen(false)
          }} />
        ))}
      </Options>
    </Container>
  )
}

export default Selector
