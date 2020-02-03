import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'

import Breadcrumb from './Breadcrumb'

it('should display a breadcrumb', () => {
  const path = [
    { id: 1, name: 'root' },
    { id: 5, name: 'element' },
  ]

  const { queryByTestId } = render(
    <ThemeProvider theme={{}}>
      <Breadcrumb
        path={path.map(props => ({
          ...props,
          href: false,
        }))}
      />
    </ThemeProvider>
  )

  expect(queryByTestId('typo-1')).not.toBe(null)
  expect(queryByTestId('typo-5')).not.toBe(null)
  expect(queryByTestId('typo-1')).toHaveTextContent('root')
  expect(queryByTestId('typo-5')).toHaveTextContent('element')
  expect(queryByTestId('link-1')).toBe(null)
  expect(queryByTestId('link-5')).toBe(null)
})

it('should display a breadcrumb with link', () => {
  const path = [
    { id: 1, name: 'root' },
    { id: 5, name: 'element' },
  ]

  const { queryByTestId } = render(
    <ThemeProvider theme={{}}>
      <Breadcrumb
        path={path.map(props => ({
          ...props,
          href: props.id,
        }))}
      />
    </ThemeProvider>
  )

  expect(queryByTestId('typo-1')).not.toBe(null)
  expect(queryByTestId('typo-5')).not.toBe(null)
  expect(queryByTestId('typo-1')).toHaveTextContent('root')
  expect(queryByTestId('typo-5')).toHaveTextContent('element')
  expect(queryByTestId('link-1')).not.toBe(null)
  expect(queryByTestId('link-5')).not.toBe(null)
  expect(queryByTestId('link-1')).toHaveTextContent('root')
  expect(queryByTestId('link-5')).toHaveTextContent('element')
})

it('should display a breadcrumb with link except the last one', () => {
  const path = [
    { id: 1, name: 'root' },
    { id: 5, name: 'element' },
  ]

  const { queryByTestId } = render(
    <ThemeProvider theme={{}}>
      <Breadcrumb
        path={path.map((props, index) => ({
          ...props,
          href: id => index === (path.length - 1) ? false : id,
        }))}
      />
    </ThemeProvider>
  )

  expect(queryByTestId('typo-1')).not.toBe(null)
  expect(queryByTestId('typo-5')).not.toBe(null)
  expect(queryByTestId('typo-1')).toHaveTextContent('root')
  expect(queryByTestId('typo-5')).toHaveTextContent('element')
  expect(queryByTestId('link-1')).not.toBe(null)
  expect(queryByTestId('link-5')).toBe(null)
  expect(queryByTestId('link-1')).toHaveTextContent('root')
})
