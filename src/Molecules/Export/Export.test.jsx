import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import BaseExport from './index'

const Export = props => <ThemeProvider theme={{}}>
  <BaseExport {...props} />
</ThemeProvider>

const exportFormats = [
  { value: 'xls', label: 'Excel' },
  { value: 'xml', label: 'XML' },
  { value: 'json', label: 'JSON' },
  { value: 'csv-comma', label: 'CSV comma-separated' },
  { value: 'csv-semicolon', label: 'CSV semicolon-separated' },
  { value: 'txt', label: 'Text' },
]

it('should not call onExport when the filename is empty', () => {
  const onExport = jest.fn()
  const { getByTestId } = render(
    <Export onExport={onExport}/>
  )

  fireEvent.change(getByTestId('export-filename'), { target: { value: '' } })
  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onExport with the filename only', () => {
  const onExport = jest.fn()
  const { getByTestId } = render(
    <Export onExport={onExport}/>
  )

  fireEvent.change(getByTestId('export-filename'), { target: { value: 'test' } })
  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenCalledWith('test', '', '')
})

it('should call onExport with the filename, format', () => {
  const onExport = jest.fn()
  const { getByTestId } = render(
    <Export onExport={onExport} formats={exportFormats}/>
  )

  fireEvent.change(getByTestId('export-filename'), { target: { value: 'test' } })
  fireEvent.change(getByTestId('export-format'), { target: { value: 'json' } })
  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenCalledWith('test', 'json', '')
})

it('should call onExport with the filename, format and extra options', () => {
  const onExport = jest.fn()
  const options = [
    { label: 'Current node', value: 'current' },
    { label: 'Child node', value: 'children' },
  ]
  const { getByTestId } = render(
    <Export onExport={onExport} formats={exportFormats} extraOptions={options}/>
  )

  fireEvent.change(getByTestId('export-filename'), { target: { value: 'test' } })
  fireEvent.change(getByTestId('export-format'), { target: { value: 'json' } })
  userEvent.click(getByTestId('export-extra-option-children'))
  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenNthCalledWith(1, 'test', 'json', 'children')
})
