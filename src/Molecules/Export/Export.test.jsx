import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import BaseExport from './index'
import { TransProvider } from '../../Atoms/Trans'
import { muiRg6Theme } from '../../../.storybook/themes'

const Export = props =>
  <TransProvider value={{}}>
    <MuiThemeProvider theme={muiRg6Theme}>
      <ThemeProvider theme={{}}>
        <BaseExport {...props} />
      </ThemeProvider>
    </MuiThemeProvider>
  </TransProvider>

it('should not call onExport when the filename is empty', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export value={{ filename: '' }} onExport={onExport} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should not call onExport when the format is empty', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export value={{ format: '' }} onExport={onExport} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onExport when the filename and format are filled', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export onExport={onExport} value={{ filename: 'toto', format: 'xls' }} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalled()
})

it('should call onExport when filename and format are filled in but disabled is true', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export
      onExport={onExport}
      value={{ filename: 'toto', format: 'xls' }}
      disabled={true}
    />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onChange when filename has changed', async () => {
  const onChange = jest.fn()
  const Wrapper = props => {
    const [value, setValue] = useState({ filename: 'toto', format: 'xls' })
    onChange.mockImplementation(setValue)

    return <Export value={value} onChange={onChange} {...props} />
  }

  const { getByLabelText, getByRole, findByText } = render(<Wrapper />)

  fireEvent.change(getByLabelText(/global\.export\.filename/), { target: { value: 'test' } })
  userEvent.click(getByRole('button', { name: label => label.includes('global.export.format') }))
  userEvent.click(await findByText('global.export.formats.json'))

  expect(onChange).toHaveBeenNthCalledWith(1, { filename: 'test', format: 'xls' })
  expect(onChange).toHaveBeenNthCalledWith(2, { filename: 'test', format: 'json' })
})

it('should have xls as format when unspecified', () => {
  const onExport = jest.fn()
  const Wrapper = props => {
    const [value, setValue] = useState({ filename: 'toto' })
    onExport.mockImplementation(setValue)

    return <Export value={value} onExport={onExport} {...props} />
  }

  const { getByText } = render(<Wrapper />)

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledWith({ filename: 'toto', format: 'xls' })
})
