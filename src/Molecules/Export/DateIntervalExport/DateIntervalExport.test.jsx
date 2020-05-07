import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import util from '@date-io/date-fns'
import * as locales from 'date-fns/locale'

import BaseExport from './index'
import { TransProvider } from '../../../Atoms/Trans'
import { muiRg6Theme } from '../../../../.storybook/themes'
import { MuiPickersUtilsProvider } from '../../../Atoms/DateTimePicker'

const Export = props =>
  <TransProvider value={{}}>
    <MuiThemeProvider theme={muiRg6Theme}>
      <ThemeProvider theme={{}}>
        <MuiPickersUtilsProvider utils={util} locale={locales.fr}>
          <BaseExport {...props} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </TransProvider>

it('should not call onExport when the from is null', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export value={{ from: null }} onExport={onExport} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should not call onExport when the to is null', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export value={{ to: null }} onExport={onExport} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})

it('should call onExport when the from and the to are not null', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export onExport={onExport} value={{ from: '01/01/2020 à 00:00:00', to: '31/12/2020 à 00:00:00' }} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalled()
})

it('should not call onExport when the from is greather than the to', () => {
  const onExport = jest.fn()
  const { getByText } = render(
    <Export onExport={onExport} value={{ from: '31/12/2020 à 00:00:00', to: '01/01/2020 à 00:00:00' }} />,
  )

  userEvent.click(getByText('global.export.actionExport'))

  expect(onExport).toHaveBeenCalledTimes(0)
})
