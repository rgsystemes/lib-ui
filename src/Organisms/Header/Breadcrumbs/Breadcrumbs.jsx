import React from 'react'
import styled from 'styled-components'
import { Typo } from '../../../Atoms'

const Container = styled.ol`
  display: flex;

  & li {
    list-style: none;
  }
`

const insertSeparators = (items, separator) =>
  items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <Typo key={`separator-${index}`}>
          {separator}
        </Typo>,
      )
    } else {
      acc.push(current)
    }

    return acc
  }, [])

const Breadcrumbs = ({ children, separator = '>', collapse = 7 }) => (
  <Container>
    {insertSeparators(
      React.Children.toArray(children).map(
        (child, index) => (
          <li key={`child-${index}`}>
            {child}
          </li>
        )
      ),
      separator
    )}
  </Container>
)

export default Breadcrumbs
