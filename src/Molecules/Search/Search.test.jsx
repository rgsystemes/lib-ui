import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'

import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { muiRg6Theme } from '../../../.storybook/themes'

import Search from './index'

it('Should call onSearch with the input value', async () => {
  const onSearch = jest.fn()
  const { getByTestId, getByLabelText } = render(
    <MuiThemeProvider theme={muiRg6Theme}>
      <ThemeProvider theme={{}}>
        <Search onSearch={onSearch} id="search-input" label="Search..." />
      </ThemeProvider>
    </MuiThemeProvider>,
  )

  await user.type(getByLabelText('Search...'), 'Obi Wan Kenobi')
  user.click(getByTestId('search-button'))

  expect(onSearch).toHaveBeenNthCalledWith(1, 'Obi Wan Kenobi')
})
