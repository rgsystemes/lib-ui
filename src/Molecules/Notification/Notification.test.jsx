import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import Notification, {
  LEVEL_INFO,
  LEVEL_ERROR,
  LEVEL_WARNING,
  LEVEL_SUCCESS,
} from './index'

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

it('should have the right class depending on level', () => {
  [
    LEVEL_SUCCESS,
    LEVEL_WARNING,
    LEVEL_INFO,
    LEVEL_ERROR,
  ].forEach(level => {
    const { queryByTestId } = render(
      <Notification show={true} level={level}>
        Hi, I am a notification - {level}
      </Notification>
    )

    expect(queryByTestId(`notification-${level}`)).not.toBe(null)
  })
})
