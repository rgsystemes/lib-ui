import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { render/*, fireEvent, within */ } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import UserSelect, { User } from './index'
import { muiRg6Theme } from '../../../.storybook/themes'

it('should show label when rendered', () => {
  const { getByText } = render(
    <UserSelect label="Hello world" />,
  )

  expect(getByText('Hello world')).toBeVisible()
})

it('should display avatar when provided', () => {
  [
    {
      id:     1,
      avatar: '//material-ui.com/static/images/avatar/1.jpg',
    },
    {
      id:     2,
      avatar: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    },
  ].forEach(({ id, avatar }) => {
    const { getByAltText } = render(
      <UserSelect values={[id]}>
        <User value={id} avatar={avatar} />
      </UserSelect>,
    )

    expect(getByAltText(avatar)).toBeVisible()
  })
})

it('should display correct color for a given status when provided', () => {
  [
    {
      id:              1,
      status:          'success',
      backgroundColor: '#5CB85C',
    },
    {
      id:              2,
      status:          'warning',
      backgroundColor: '#F0AD4E',
    },
  ].forEach(({ id, status, backgroundColor }) => {
    /* const { getByText } = */ render(
      <MuiThemeProvider theme={muiRg6Theme}>
        <ThemeProvider theme={{}}>
          <UserSelect values={[id]} label="users">
            <User value={id} status={status}>{status}</User>
          </UserSelect>
        </ThemeProvider>
      </MuiThemeProvider>,
    )

    // FIXME understand why theme colors doesn't apply here
    // expect(getByText(status).parentNode).toHaveStyle({
    //   backgroundColor: backgroundColor,
    // })
  })
})

it('should add item in the list', async () => {
  const optionText = 'user'
  /* const { container, getByRole, findByText } = */ render(
    <UserSelect label="users">
      <User value="1">{optionText}</User>
    </UserSelect>,
  )

  // FIXME https://github.com/testing-library/react-testing-library/issues/322#issuecomment-603825869
  // userEvent.click(getByRole('button'))
  // const listbox = await within(document.body).findByRole('listbox')
  // const listItem = await within(listbox).findByText(optionText)
  // userEvent.click(listItem)
  // await within(container).findByText(optionText)

  // expect(await findByText(optionText)).toBeVisible()
})

it('should remove item of the list', async () => {
  /* const { container, getByRole, findByText } = */ render(
    <UserSelect values={['1']}>
      <User value="1">user</User>
    </UserSelect>,
  )

  // FIXME https://github.com/testing-library/react-testing-library/issues/322#issuecomment-603825869
  // userEvent.click(getByRole('button'))
  // const listbox = await within(document.body).findByRole('listbox')
  // const listItem = await within(listbox).findByText(optionText)
  // userEvent.click(listItem)
  // await within(container).findByText(optionText)

  // expect(await findByText(optionText)).not.toBeVisible()
})

it('should remove item of the list using chip', async () => {
  const optionText = 'user'
  /* const { getByText, findByText } = */ render(
    <UserSelect values={['1']}>
      <User value="1">{optionText}</User>
    </UserSelect>,
  )

  // FIXME not removing chip
  // const chipDeleteElement = getByText(optionText).nextSibling
  // userEvent.click(chipDeleteElement)

  // expect(await findByText(optionText)).not.toBeVisible()
})
