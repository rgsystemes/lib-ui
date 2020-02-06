import React, { forwardRef } from 'react'
import styled from 'styled-components'

import IconButton from '../IconButton'
import BaseButton from '../Button'

const Button = styled(BaseButton)`
  &.MuiButton-root {
    min-width: fit-content;
  }
`

const iconSize = buttonSize =>
  buttonSize === 'small' ? 16 :
  buttonSize === 'large' ? 22 :
  16 // medium

const Icon = forwardRef(({ Component, size, button = false, ...props }, ref) => {
  const Wrapper = button ? Button : IconButton

  return <Wrapper size={size} {...props} ref={ref}>
    <Component size={iconSize(size)} />
  </Wrapper>
})

Icon.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default Icon
