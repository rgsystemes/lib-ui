import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  transition: all 0.1s ease;
  right: ${({ show }) => show ? '0' : '-300px'};
  background-color: #f5f5f5;
`

const SidePanel = ({ show = false, ...props }) => (
  <Container show={show} {...props}/>
)

export default SidePanel
