import React from 'react'
import styled from 'styled-components'
export default { title: 'Templates' }

const Container = styled.p`
  max-width: 750px;
  font-family: sans-serif;
  color: #4D4339;
`

export const Templates = () => (
  <Container>
    <h2>Templates</h2>
    <blockquote>
      Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.
      <br/>[...]<br/>
      Another important characteristic of templates is that they focus on the page’s underlying content structure rather than the page’s final content.
      <br/><br/>
      <cite><a target='_blank' href="http://atomicdesign.bradfrost.com/chapter-2/#templates">Brad Frost, Atomic design</a></cite>
    </blockquote>
  </Container>
)
