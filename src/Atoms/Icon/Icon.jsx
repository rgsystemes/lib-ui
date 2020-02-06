import React, { forwardRef, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import IconButton from '../IconButton'
import BaseButton from '../Button'

const Button = styled(BaseButton)`
  &.MuiButton-root {
    min-width: min-content;
  }
`

// this component needs to be able to hold a ref for possible Tooltip uses
// see https://material-ui.com/api/tooltip/
const Icon = forwardRef(({ Component, size = 'medium', button = false, ...props }, ref) => {
  const { iconSizes } = useContext(ThemeContext)
  const Wrapper = button ? Button : IconButton

  return <Wrapper size={size} {...props} ref={ref}>
    <Component size={iconSizes[size]} />
  </Wrapper>
})

Icon.defaultProps = {
  disableRipple:      true,
  disableFocusRipple: true,
}

export default Icon
