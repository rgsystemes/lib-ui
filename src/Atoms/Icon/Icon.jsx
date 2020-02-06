import React, { forwardRef } from 'react'
import styled from 'styled-components'

import IconButton from '../IconButton'
import BaseButton from '../Button'

const Button = styled(BaseButton)`
  &.MuiButton-root {
    min-width: min-content;
  }
`

const iconSize = buttonSize =>
  buttonSize === 'small' ? 16 :
  buttonSize === 'large' ? 22 :
  16 // medium

// this component needs to be able to hold a ref for possible Tooltip uses
// see https://material-ui.com/api/tooltip/
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
