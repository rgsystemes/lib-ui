import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import { TransProvider } from '../../Atoms/Trans'
import BaseExport from './index'

const Export = props =>
  <TransProvider value={{}}>
    <ThemeProvider theme={{}}>
      <BaseExport {...props} />
    </ThemeProvider>
  </TransProvider>

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
  const { getByText } = render(
    <Export value={{ filename: '' }} onExport={onExport}/>,
  )

  userEvent.click(getByText('molecules.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should not call onExport when the format is empty', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export value={{ format: '' }} formats={exportFormats} onExport={onExport}/>,
  )

  userEvent.click(getByText('molecules.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onExport when the filename and format are filled', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export onExport={onExport} formats={exportFormats} value={{ filename: 'toto', format: 'xls' }}/>,
  )

  userEvent.click(getByText('molecules.export.actionExport'))

  expect(onExport).toHaveBeenCalled()
})

it('should call onExport when filename and format are filled in but disabled is true', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export
      onExport={onExport}
      formats={exportFormats}
      value={{ filename: 'toto', format: 'xls' }}
      disabled={true}
    />,
  )

  userEvent.click(getByText('molecules.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onChange when filename has changed', async () => {
  const onChange = jest.fn()
  const Wrapper = props => {
    const [value, setValue] = useState({ filename: 'toto', format: 'xls' })
    onChange.mockImplementation(setValue)

    return <Export value={value} onChange={onChange} {...props}/>
  }

  const { getByLabelText } = render(<Wrapper formats={exportFormats} />)

  fireEvent.change(getByLabelText(/molecules\.export\.filename/), { target: { value: 'test' } })
  userEvent.selectOptions(getByLabelText(/molecules\.export\.format/), 'json')

  expect(onChange).toHaveBeenNthCalledWith(1, { filename: 'test', format: 'xls' })
  expect(onChange).toHaveBeenNthCalledWith(2, { filename: 'test', format: 'json' })
})
