import React, { useState } from 'react'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import UserSelect, { User } from './index'

const StateHolder = ({ children = () => {}, state = [] }) => {
  const [values, setValues] = useState(state)

  return <>
    <div data-testid='values'>
      {values.map(value => <div key={value} data-testid={`value-${value}`} />)}
    </div>
    {children([values, setValues])}
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
  'warning',
])('should display correct color for a given status when provided', (status, id = 1) => {
  const { getByText } = render(
    <UserSelect values={[id]}>
      <User value={id} status={status}>{status}</User>
    </UserSelect>,
  )

  expect(getByText(status).parentNode).toHaveAttribute('class', expect.stringContaining(`-${status}-`))
})

it('should add item in the list', async () => {
  const { getByLabelText, findByText, findByTestId } = render(
    <StateHolder>
      {([values, onChange]) => (
        <UserSelect id="test" label="test" values={values} onChange={onChange}>
          <User value={1}>user</User>
        </UserSelect>
      )}
    </StateHolder>,
  )

  user.click(getByLabelText('test'))
  user.click(await findByText('user'))

  expect(await findByTestId('values')).toContainElement(await findByTestId('value-1'))
})

it('should remove item of the list', async () => {
  const { getByLabelText, getByTestId, findAllByText } = render(
    <StateHolder state={[1]}>
      {([values, onChange]) => (
        <UserSelect id="test" label="test" values={values} onChange={onChange}>
          <User value={1}>user</User>
        </UserSelect>
      )}
    </StateHolder>,
  )

  user.click(getByLabelText('test'))
  user.click((await findAllByText('user')).find(node => !node.classList.contains('MuiChip-label')))

  expect(getByTestId('values')).toBeEmpty()
})

it('should remove item of the list using chip', () => {
  const { getByText, getByTestId } = render(
    <StateHolder state={[1]}>
      {([values, onChange]) => (
        <UserSelect id="test" values={values} onChange={onChange}>
          <User value={1}>user</User>
        </UserSelect>
      )}
    </StateHolder>,
  )

  user.click(getByText('user').nextSibling)

  expect(getByTestId('values')).toBeEmpty()
})
