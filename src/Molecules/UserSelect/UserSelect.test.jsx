import React, { cloneElement, useState, Children } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { render, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import { muiRg6Theme } from '../../../.storybook/themes'
import BaseUserSelect, { User } from './index'

// required until jsdom>=16 (https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813)
global.document.createRange = () => ({
  setStart:                () => {},
  setEnd:                  () => {},
  commonAncestorContainer: {
    nodeName:      'BODY',
    ownerDocument: document,
  },
})

const UserSelect = ({ children, ...props }) => (
  <MuiThemeProvider theme={muiRg6Theme}>
    <ThemeProvider theme={{}}>
      <BaseUserSelect {...props}>
        {children}
      </BaseUserSelect>
    </ThemeProvider>
  </MuiThemeProvider>
)

const StateHolder = ({ children = () => {}, state = [] }) => {
  const [values, onChange] = useState(state)
  const [errors, setErrors] = useState([])
  const onError = data => setErrors(errors.concat(data))

  return <>
    <div data-testid="values">
      {values.map(value => <div key={value} data-testid={`value-${value}`} />)}
    </div>
    <div data-testid="errors">
      {errors.map(({ error }) => <div key={error} data-testid={`error-${error}`} />)}
    </div>
    {cloneElement(Children.only(children), { values, onChange, onError })}
  </>
}

it('should show label when rendered', () => {
  const { getByText } = render(
    <UserSelect label="Hello world" />,
  )

  expect(getByText('Hello world')).toBeVisible()
})

it.each([
  '//material-ui.com/static/images/avatar/1.jpg',
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
])('should display avatar when provided', (avatar, id = 1) => {
  const { getByAltText } = render(
    <UserSelect values={[id]}>
      <User value={id} avatar={avatar} />
    </UserSelect>,
  )

  expect(getByAltText(avatar)).toBeVisible()
})

it.each([
  'success',
  'info',
])('should display correct color for a given status when provided', (status, id = 1) => {
  const { getByText } = render(
    <UserSelect values={[id]}>
      <User value={id} status={status}>{status}</User>
    </UserSelect>,
  )

  expect(getByText(status).parentNode).toHaveAttribute('class', expect.stringContaining(`-${status}-`))
})

it('should add item in the list', async () => {
  const { getByRole, getByTestId, findByText, findByTestId } = render(
    <StateHolder>
      <UserSelect>
        <User value={1}>user</User>
      </UserSelect>
    </StateHolder>,
  )

  user.click(getByRole('combobox'))
  user.click(await findByText('user'))

  expect(getByTestId('values')).toContainElement(await findByTestId('value-1'))
})

it('should remove item of the list', async () => {
  const { getByRole, getByTestId, findAllByText } = render(
    <StateHolder state={[1]}>
      <UserSelect>
        <User value={1}>user</User>
      </UserSelect>
    </StateHolder>,
  )

  user.click(getByRole('combobox'))
  user.click((await findAllByText('user')).find(node => !node.classList.contains('MuiChip-label')))

  expect(getByTestId('values')).toBeEmpty()
})

it('should remove item of the list using chip', () => {
  const { getByText, getByTestId } = render(
    <StateHolder state={[1]}>
      <UserSelect>
        <User value={1}>user</User>
      </UserSelect>
    </StateHolder>,
  )

  user.click(getByText('user').nextSibling)

  expect(getByTestId('values')).toBeEmpty()
})

it('should add custom option matching email', async () => {
  const { getByPlaceholderText, getByTestId, findByTestId } = render(
    <StateHolder>
      <UserSelect placeholder="add" />
    </StateHolder>,
  )

  const input = getByPlaceholderText('add')
  fireEvent.change(input, { target: { value: 'a@a' } })
  fireEvent.keyDown(input, { key: 'Enter' })

  expect(getByTestId('values')).toContainElement(await findByTestId('value-a@a'))
})

it('should trigger error handler when custom option does not match email', async () => {
  const { getByPlaceholderText, getByTestId, findByTestId } = render(
    <StateHolder>
      <UserSelect placeholder="add" />
    </StateHolder>,
  )

  const input = getByPlaceholderText('add')
  fireEvent.change(input, { target: { value: 'a' } })
  fireEvent.keyDown(input, { key: 'Enter' })

  expect(getByTestId('errors')).toContainElement(await findByTestId('error-email_validation_failed'))
})

it('should trigger error handler when custom option is already added', async () => {
  const { getByPlaceholderText, getByTestId, findByTestId } = render(
    <StateHolder>
      <UserSelect placeholder="add" />
    </StateHolder>,
  )

  const input = getByPlaceholderText('add')
  fireEvent.change(input, { target: { value: 'a@a' } })
  fireEvent.keyDown(input, { key: 'Enter' })
  fireEvent.change(input, { target: { value: 'a@a' } })
  fireEvent.keyDown(input, { key: 'Enter' })

  expect(getByTestId('errors')).toContainElement(await findByTestId('error-email_already_exist'))
})
