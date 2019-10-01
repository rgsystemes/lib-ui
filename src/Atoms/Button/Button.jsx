import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Button = ({ children }) => (
  <Container>
    { children }
  </Container>
)

export default Button
