import React from 'react'
import styled from 'styled-components'
export default { title: 'Atoms' }

const Container = styled.p`
  max-width: 750px;
  font-family: sans-serif;
  color: #4D4339;
`

export const Atoms = () => (
  <Container>
    <h2>Atoms</h2>
    <blockquote>
      The atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces.
      <br/>
      These atoms include basic HTML elements like form labels, inputs, buttons,
      and others that can’t be broken down any further without ceasing to be functional.
      <br/>[...]<br/>
      In the context of a pattern library, atoms demonstrate all your base styles at a glance,
      which can be a helpful reference to keep coming back to as you develop and maintain your design system.
      <br/><br/>
      <cite><a target='_blank' href="http://atomicdesign.bradfrost.com/chapter-2/#atoms">Brad Frost, Atomic design</a></cite>
    </blockquote>
  </Container>
)
