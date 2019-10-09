import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Tooltip = ({ children }) => (
  <Container>
    { children }
  </Container>
)

export default Tooltip
