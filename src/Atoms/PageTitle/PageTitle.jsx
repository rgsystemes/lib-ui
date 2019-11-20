import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import Typo from '../Typo'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  width: 38px;
  height: 38px;
  box-sizing: border-box;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  ${space}
`

const PageTitle = ({ children, icon }) => (
  <Container>
    <IconWrapper marginRight="m" p="m">
      {icon}
    </IconWrapper>
    <Typo fontFamily="title" fontSize="title" lineHeight="title">
      {children}
    </Typo>
  </Container>
)

export default PageTitle
