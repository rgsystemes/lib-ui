import React from 'react'
import styled from 'styled-components'
import { Separator } from '../../../Atoms'

const Container = styled.ol`
  display: flex;
  padding: 0;
  margin: 0;

  & li {
    list-style: none;
  }
`

const insertSeparators = (items, separator) =>
  items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <Separator key={`separator-${index}`}>
          {separator}
        </Separator>
      )
    } else {
      acc.push(current)
    }

    return acc
  }, [])

const Breadcrumbs = ({ children, separator = '>', collapse = 5 }) => (
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
