import React from 'react'
import styled from 'styled-components'
import { border, space, position } from 'styled-system'

import Typo from '../Typo'

const Container = styled.div`
  position: relative;
  display : inline-block;
  opacity : 1;
`

const Content = styled(Typo)`
  ${space}
  ${border}
  ${position}
  white-space: nowrap;
  white-space: break-spaces;
  transform  : translate(-50%, -100%);
  width      : max-content;
  max-width  : 200px;
  display    : none;

  ${Container}:hover & {
    display: block;
  }
  
  &::after {
    content     : "";
    position    : absolute;
    top         : 100%;
    left        : 50%;
    margin-left : -5px;
    border-width: 5px;
    border-style: solid;
    ${border}
    border-radius      : 0;
    border-left-color  : transparent;
    border-right-color : transparent;
    border-bottom-color: transparent;
  }
`

Content.defaultProps = {
  bg:           'text',
  borderColor:  'text',
  color:        'background',
  fontSize:     0,
  borderRadius: 1,
  py:           's',
  px:           'm',
  position:     'absolute',
  top:          '-5px',
  left:         '50%',
}

export const Tooltip = ({ title, children, ...props }) => (
  <Container title={title} data-testid={'container'} {...props}>
    {children}
    <Content data-testid={'tooltip'}>
      {title}
    </Content>
  </Container>
)

export default Tooltip
