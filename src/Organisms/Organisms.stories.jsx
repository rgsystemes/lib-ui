import React from 'react'
import styled from 'styled-components'
export default { title: 'Organisms' }

const Container = styled.div`
  max-width: 750px;
  font-family: sans-serif;
  color: #4D4339;
`

export const Organisms = () => (
  <Container>
    <h2>Organisms</h2>
    <blockquote>
      Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms.
      <br/>
      These organisms form distinct sections of an interface.
      <br/>[...]<br/>
      Organisms demonstrate those smaller, simpler components in action and serve as distinct patterns that can be used again and again.
      <br/><br/>
      <cite><a target='_blank' href="http://atomicdesign.bradfrost.com/chapter-2/#organisms">Brad Frost, Atomic design</a></cite>
    </blockquote>
  </Container>
)
