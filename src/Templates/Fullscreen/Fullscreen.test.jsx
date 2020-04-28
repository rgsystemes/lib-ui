import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fullscreen from './index'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { muiRg6Theme } from '../../../.storybook/themes'

const StateHolder = ({ children = () => {} }) => {
  const [displayed, setDisplayed] = useState(true)

  return <>
    <MuiThemeProvider theme={muiRg6Theme}>
      <ThemeProvider theme={{}}>
        {children({ open: displayed, setOpen: setDisplayed })}
      </ThemeProvider>
    </MuiThemeProvider>
  </>
}

it('should show when open is set and hide when cancel is clicked', () => {
  const { queryByText } = render(
    <StateHolder>
      {({ ...props }) => (
        <Fullscreen {...props} />
      )}
    </StateHolder>,
  )
  const cancel = queryByText('global.action.cancel')
  expect(cancel).toBeVisible()
  fireEvent.click(cancel)
  expect(cancel).not.toBeInTheDocument()
})

it('should show when open is set and hide when x is clicked', () => {
  const { getByTitle } = render(
    <StateHolder>
      {({ ...props }) => (
        <Fullscreen {...props} />
      )}
    </StateHolder>,
  )

  const cancel = getByTitle('global.action.cancel')
  expect(cancel).toBeVisible()
  fireEvent.click(cancel)
  expect(cancel).not.toBeInTheDocument()
})

it('should call custom function on validate', () => {
  let hasValidated = false
  const validateText = 'validatebutton'
  const callback = () => {
    hasValidated = true
  }

  const { getByText } = render(
    <StateHolder>
      {({ ...props }) => (
        <Fullscreen onValidate={callback} validateText={validateText} {...props} />
      )}
    </StateHolder>,
  )

  expect(hasValidated).toBe(false)
  fireEvent.click(getByText(validateText))
  expect(hasValidated).toBe(true)
})
