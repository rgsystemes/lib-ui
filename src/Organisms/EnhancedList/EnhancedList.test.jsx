import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { render, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { muiRg6Theme } from '../../../.storybook/themes'

import BaseEnhancedList from './index'

// https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813
global.document.createRange = () => ({
  setStart:                () => {},
  setEnd:                  () => {},
  commonAncestorContainer: {
    nodeName:      'BODY',
    ownerDocument: document,
  },
})

const EnhancedList = props => <MuiThemeProvider theme={muiRg6Theme}>
  <ThemeProvider theme={{}}>
    <BaseEnhancedList
      columns={[]}
      {...props}
    />
  </ThemeProvider>
</MuiThemeProvider>

it('should hide add button when onAdd is not defined', () => {
  const { queryByTestId } = render(
    <EnhancedList/>,
  )

  expect(queryByTestId('add-button')).toBeNull()
})

it('should call onAdd when clicking on add button', () => {
  const onAdd = jest.fn()
  const { queryByTestId } = render(
    <EnhancedList onAdd={onAdd}/>,
  )

  act(() => {
    fireEvent.click(queryByTestId('add-button'))
  })

  expect(queryByTestId('add-button')).not.toBeNull()
  expect(onAdd).toHaveBeenCalled()
})

it('should hide search button when onSearch is not defined', () => {
  const { queryByTestId } = render(
    <EnhancedList/>,
  )

  expect(queryByTestId('search-button')).toBeNull()
})

it('should call onSearch when clicking on search button', () => {
  const onSearch = jest.fn()
  const { queryByTestId } = render(
    <EnhancedList onSearch={onSearch}/>,
  )

  act(() => {
    fireEvent.click(queryByTestId('search-button'))
  })

  expect(queryByTestId('search-button')).not.toBeNull()
  expect(onSearch).toHaveBeenCalled()
})
