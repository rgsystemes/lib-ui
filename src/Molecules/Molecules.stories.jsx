import React from 'react'
import styled from 'styled-components'
export default { title: 'Molecules' }

const Container = styled.div`
  max-width: 750px;
  font-family: sans-serif;
  color: #4D4339;
`

export const Molecules = () => (
  <Container>
    <h2>Molecules</h2>
    <blockquote>
      In interfaces, molecules are relatively simple groups of UI elements functioning together as a unit.
      <br/>
      For example, a form label, search input, and button can join together to create a search form molecule.
      <br/>[...]<br/>
      Creating simple UI molecules makes testing easier, encourages reusability, and promotes consistency throughout the interface.
      <br/><br/>
      <cite><a target='_blank' href="http://atomicdesign.bradfrost.com/chapter-2/#molecules">Brad Frost, Atomic design</a></cite>
    </blockquote>
  </Container>
)
