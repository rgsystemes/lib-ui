import React from 'react'
import styled from 'styled-components'
import { variant, border, space, typography } from 'styled-system'

const Title = styled.h4`
  margin-top: 0;
  ${typography}
  &::first-letter {
    text-transform: uppercase;
  }
`
Title.defaultProps = {
  fontSize:   'l',
  fontWeight: '500',
}
const Container = styled.div`
  ${typography}
  ${border}
  /* border: 1px solid; */
  ${space}
  ${variant({ prop: 'level', scale: 'levels' })}
`

Container.defaultProps = {
  borderRadius: '1',
  p:            'l',
  fontFamily:   'body',
  fontSize:     's',
}

const Banner = ({ level, title, children }) => (
  <Container level={level}>
    {title && <Title>{title}</Title>}
    {children}
  </Container>
)

export default Banner
