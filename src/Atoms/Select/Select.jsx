import React, { useState } from 'react'
import styled from 'styled-components'
import {
  space,
  typography,
  border,
  color,
  shadow,
  position,
} from 'styled-system'

import { useOnClickOutside } from '../../hooks'
import Button from '../Button'
import Option from './Option'

const Container = styled(Button)`
  position: relative;
`

const Options = styled.div`
  ${({ openOnTop }) => openOnTop ? 'bottom: 100%;' : 'top: 100%;'}
  ${({ stickToLeft }) => stickToLeft ? 'left: 0;' : 'right: 0;'}
  display:    ${({ open }) => open ? 'block' : 'none'};
  position:   absolute;
  border:     1px solid;
  min-width:  160px;
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
  label,
  options = [],
  openOnTop,
  stickToLeft = true,
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const ref = useOnClickOutside(() => setOpen(false))
  const select = option => {
    onChange(option)
    setOpen(false)
  }

  return (
    <Container data-testid='select' {...props} ref={ref} onClick={() => options.length > 0 && setOpen(!open)}>
      {label}
      <Options open={open} openOnTop={openOnTop} stickToLeft={stickToLeft}>
        {options.map(({ value, label }) => (
          <Option key={value} data-testid={`option-${value}`} onClick={() => select(value)}>
            { label }
          </Option>
        ))}
      </Options>
    </Container>
  )
}

export default Select
