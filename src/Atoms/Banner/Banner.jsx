import React from 'react'
import styled from 'styled-components'
import { variant, border, space, typography } from 'styled-system'
import Typo from '../Typo'

const Title = styled(Typo)`
  ${space}
  ${variant({ prop: 'level', scale: 'levels' })}
  &::first-letter {
    text-transform: uppercase;
  }
`

Title.defaultProps = {
  mt:         0,
  mb:         2,
  fontSize:   'l',
  fontWeight: 'normal',
  lineHeight: 'heading',
  bg:         'transparent',
}

const Container = styled.div`
  ${typography}
  ${border}
  ${space}
  border: 1px solid;
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
    {title && <Title level={level} as='h4'>{title}</Title>}
    {children}
  </Container>
)

export default Banner
