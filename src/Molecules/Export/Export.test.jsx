import React, { useState } from 'react'
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
    <Export value={{ filename: '' }} onExport={onExport}/>
  )

  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should not call onExport when the format is empty', () => {
  const onExport = jest.fn()
  const { getByTestId } = render(
    <Export value={{ format: '' }} formats={exportFormats} onExport={onExport}/>
  )

  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onExport when the filename and format are filled', () => {
  const onExport = jest.fn()
  const { getByTestId } = render(
    <Export onExport={onExport} formats={exportFormats} value={{ filename: 'toto', format: 'xls' }}/>
  )

  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenCalled()
})

it('should call onExport when filename and format are filled in but disabled is true', () => {
  const onExport = jest.fn()
  const { getByTestId } = render(
    <Export
      onExport={onExport}
      formats={exportFormats}
      value={{ filename: 'toto', format: 'xls' }}
      disabled={true}
    />
  )

  userEvent.click(getByTestId('export-button'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onChange when filename has changed', async () => {
  const onChange = jest.fn()
  const Wrapper = props => {
    const [value, setValue] = useState({ filename: 'toto', format: 'xls' })
    onChange.mockImplementation(setValue)

    return <Export value={value} onChange={onChange} {...props}/>
  }

  const { getByTestId } = render(<Wrapper formats={exportFormats} />)

  fireEvent.change(getByTestId('export-filename'), { target: { value: 'test' } })
  userEvent.selectOptions(getByTestId('export-format'), 'json')

  expect(onChange).toHaveBeenNthCalledWith(1, { filename: 'test', format: 'xls' })
  expect(onChange).toHaveBeenNthCalledWith(2, { filename: 'test', format: 'json' })
})
