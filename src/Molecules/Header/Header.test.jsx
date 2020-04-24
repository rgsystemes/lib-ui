import React, { useState, cloneElement, Children } from 'react'
import { MemoryRouter as Router } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { render, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'

import { muiRg6Theme } from '../../../.storybook/themes'
import Header from './index'

// required until jsdom>=16 (https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813)
global.document.createRange = () => ({
  setStart:                () => {},
  setEnd:                  () => {},
  commonAncestorContainer: {
    nodeName:      'BODY',
    ownerDocument: document,
  },
})

// FIXME: MuiThemeProvider and ThemeProvider are required here because of Tooltip theme usage
const ThemeWrapper = ({ children = () => {} }) => (
  <MuiThemeProvider theme={muiRg6Theme}>
    <ThemeProvider theme={{}}>
      {children}
    </ThemeProvider>
  </MuiThemeProvider>
)

const StateHolder = ({ children = () => {}, state = '', success = true }) => {
  const [subFeature, setSubFeature] = useState(state)
  const [isEditing, setEditing] = useState(false)
  const [isLoading, setLoading] = useState(false)

  return <>
    <div data-testid="state" data-value={subFeature} />
    {cloneElement(Children.only(children), {
      subFeature,
      isEditing,
      isLoading,
      onEdit:   () => setEditing(true),
      onCancel: () => setEditing(false),
      onSubmit: value => {
        setLoading(true)
        setTimeout(() => {
          setEditing(!success)
          setLoading(false)
          if (success) {
            setSubFeature(value)
          }
        })
      },
    })}
  </>
}

it('should display feature', () => {
  const { getByText } = render(
    <Header feature="feature" />,
  )

  expect(getByText('feature')).toBeVisible()
})

it('should have correct featurePath link', () => {
  const { getByText } = render(
    <Router>
      <Header feature="feature" featurePath="/feature" />
    </Router>,
  )

  expect(getByText('feature')).toHaveAttribute('href', '/feature')
})

it('should display subFeature', () => {
  const { getByText } = render(
    <Header subFeature="subFeature" />,
  )

  expect(getByText('subFeature')).toBeVisible()
})

it('should display status', () => {
  const { getByText } = render(
    <Header status="status" />,
  )

  expect(getByText('status')).toBeVisible()
})

it('should display actions', () => {
  const { getByText } = render(
    <Header actions="actions" />,
  )

  expect(getByText('actions')).toBeVisible()
})

it('should handle saving', async () => {
  const { getByRole, findByRole, queryByRole } = render(
    <ThemeWrapper>
      <StateHolder>
        <Header />
      </StateHolder>
    </ThemeWrapper>,
  )

  const edit = getByRole('edit')
  expect(edit).toBeVisible()

  user.click(edit)

  const save = await findByRole('save')
  expect(save).toBeVisible()
  expect(queryByRole('edit')).not.toBeInTheDocument()

  user.click(save)

  const spinner = await findByRole('progressbar')
  expect(spinner).toBeVisible()
  expect(queryByRole('save')).not.toBeInTheDocument()

  expect(edit).toBeVisible()
  expect(queryByRole('progressbar')).not.toBeInTheDocument()
})

it('should save when user types enter', async () => {
  const { getByRole, queryByRole, findByRole } = render(
    <ThemeWrapper>
      <StateHolder>
        <Header />
      </StateHolder>
    </ThemeWrapper>,
  )

  user.click(getByRole('edit'))
  // FIXME: https://github.com/testing-library/user-event/pull/235
  // await user.type(document.activeElement, '{enter}')
  fireEvent.keyDown(document.activeElement, { key: 'Enter' })

  expect(await findByRole('progressbar')).toBeVisible()
  expect(queryByRole('save')).not.toBeInTheDocument()
})

it('should cancel when user types escape', () => {
  const { getByRole, queryByRole } = render(
    <ThemeWrapper>
      <StateHolder>
        <Header />
      </StateHolder>
    </ThemeWrapper>,
  )

  user.click(getByRole('edit'))
  // FIXME: https://github.com/testing-library/user-event/pull/235
  // await user.type(document.activeElement, '{esc}')
  fireEvent.keyDown(document.activeElement, { key: 'Escape' })

  expect(getByRole('edit')).toBeVisible()
  expect(queryByRole('save')).not.toBeInTheDocument()
})

it('should reset when user click anything but input and save button', async () => {
  const { getByRole, getByText, queryByText } = render(
    <ThemeWrapper>
      <StateHolder state="subFeature">
        <Header feature="feature" />
      </StateHolder>
    </ThemeWrapper>,
  )

  user.click(getByRole('edit'))
  await user.type(document.activeElement, '@', { allAtOnce: true })

  expect(queryByText('subFeature')).not.toBeInTheDocument()

  act(() => {
    user.click(getByText('feature'))
  })

  expect(getByText('subFeature')).toBeVisible()
})

it('should update state on successful save', async () => {
  const { getByRole, getByTestId, findByRole } = render(
    <ThemeWrapper>
      <StateHolder state="initial">
        <Header />
      </StateHolder>
    </ThemeWrapper>,
  )

  const state = getByTestId('state')
  expect(state).toHaveAttribute('data-value', 'initial')

  user.click(getByRole('edit'))
  await user.type(document.activeElement, 'success', { allAtOnce: true })

  user.click(getByRole('save'))

  expect(await findByRole('edit')).toBeVisible()
  expect(state).toHaveAttribute('data-value', 'success')
})

it('should restore state on unsuccessful save', async () => {
  const { getByRole, getByTestId, findByRole } = render(
    <ThemeWrapper>
      <StateHolder state="initial" success={false}>
        <Header />
      </StateHolder>
    </ThemeWrapper>,
  )

  const state = getByTestId('state')
  expect(state).toHaveAttribute('data-value', 'initial')

  user.click(getByRole('edit'))

  await user.type(document.activeElement, 'failure', { allAtOnce: true })

  user.click(getByRole('save'))

  expect(await findByRole('save')).toBeVisible()
  expect(state).toHaveAttribute('data-value', 'initial')
})
