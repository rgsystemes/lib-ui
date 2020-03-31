import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserSelect from './index'

it('should show label when rendered', () => {
  const { getByText } = render(
    <UserSelect
      label="Hello world"
    />,
  )

  expect(getByText('Hello world')).toBeVisible()
})
