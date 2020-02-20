import React from 'react'
import { css } from '@styled-system/css'
import { layout } from 'styled-system'
import styled from 'styled-components'

import Typo from '../../Atoms/Typo'

const Container = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    ${css({ my: 'l' })}
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EmptyPlaceholder = ({
  primaryText,
  secondaryText,
  icon = null,
  action = null,
  children,
  empty = false,
  ...props
}) =>
  empty ? <Container {...props}>
    {icon}
    <TextContainer>
      <Typo fontSize="xl">
        {primaryText}
      </Typo>
      <Typo fontSize="s">
        {secondaryText}
      </Typo>
    </TextContainer>
    {action}
  </Container> : <>{children}</>

EmptyPlaceholder.defaultProps = {
  minHeight: '700px',
}

export default EmptyPlaceholder
