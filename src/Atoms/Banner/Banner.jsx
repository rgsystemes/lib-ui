import React from 'react'
import styled from 'styled-components'
import {
  variant,
  border,
  color,
  space,
  typography,
  position,
} from 'styled-system'
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

const Close = styled.div`
  ${border}
  ${color}
  ${typography}
  ${position}
  ${space}
  position: absolute;
  cursor: pointer;
`

Close.defaultProps = {
  border:     0,
  bg:         'transparent',
  color:      'midgray',
  fontSize:   4,
  fontWeight: 'bold',
  top:        0,
  right:      0,
  px:         'l',
  py:         'm',

}

const Container = styled.div`
  ${typography}
  ${border}
  ${space}
  position: relative;
  border: 1px solid;
  ${variant({ prop: 'level', scale: 'levels' })}
`

Container.defaultProps = {
  borderRadius: '1',
  p:            'l',
  fontFamily:   'body',
  fontSize:     's',
}

const Banner = ({
  level,
  title,
  children,
  onClose,
  ...props
}) => (
  <Container level={level} {...props}>
    {onClose && <Close onClick={onClose}>×</Close>}
    {title && <Title level={level} as='h4'>{title}</Title>}
    {children}
  </Container>
)

export default Banner
