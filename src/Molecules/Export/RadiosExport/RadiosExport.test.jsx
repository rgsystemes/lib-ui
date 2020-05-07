import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import BaseExport from './index'
import { TransProvider } from '../../../Atoms/Trans'
import { muiRg6Theme } from '../../../../.storybook/themes'

const Export = props =>
  <TransProvider value={{}}>
    <MuiThemeProvider theme={muiRg6Theme}>
      <ThemeProvider theme={{}}>
        <BaseExport {...props} />
      </ThemeProvider>
    </MuiThemeProvider>
  </TransProvider>

it('should not call onExport when the option is not selected', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export value={{ data: '' }} onExport={onExport} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onExport when the option is selected', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export onExport={onExport} value={{ data: 'bar' }} options={[{ label: 'foo', value: 'bar' }]} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalled()
})
