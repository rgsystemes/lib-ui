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

const Select = ({
  label, options = [], openOnTop, onChange, ...props
}) => {
  const [open, setOpen] = useState(false)
  const ref = useOnClickOutside(() => setOpen(false))
  const select = option => {
    onChange(option)
    setOpen(false)
  }

  return (
    <Container data-testid='select' {...props} ref={ref} onClick={() => setOpen(!open)}>
      {label}
      <Options open={open} openOnTop={openOnTop}>
        {options.map(option => (
          <Option key={option} data-testid={`option-${option}`} onClick={() => select(option)}>
            { option }
          </Option>
        ))}
      </Options>
    </Container>
  )
}

export default Select
