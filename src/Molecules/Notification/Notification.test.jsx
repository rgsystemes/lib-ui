import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import BaseNotification from './index'

const Notification = props =>
  <ThemeProvider theme={global.theme}>
    <BaseNotification {...props}/>
  </ThemeProvider>

it('should show a notification with a message on it', () => {
  const { getByTestId } = render(
    <Notification title="Hello" show={true}>
      It's me. I was wondering if after all these years you'd like to meet
    </Notification>
  )

  expect(getByTestId('notification-title')).toHaveTextContent('Hello')
  expect(getByTestId('notification-message')).toHaveTextContent("It's me. I was wondering if after all these years you'd like to meet")
})

it('should not show a notification when show prop is false', () => {
  const { queryAllByTestId } = render(<Notification show={false}/>)

  expect(queryAllByTestId('notification-alert').length).toBe(0)
})

it('should call onClose when clicking on close button', () => {
  const onClose = jest.fn()
  const { getByTestId } = render(
    <Notification show={true} onClose={onClose}>
      Hi, I am a notification
    </Notification>
  )

  userEvent.click(getByTestId('close-notification'))

  expect(onClose).toHaveBeenCalledTimes(1)
})
