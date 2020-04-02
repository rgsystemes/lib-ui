import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Editable from './index'

it('should show the input', () => {
  const { getByLabelText } = render(
    <Editable edit={true} label="Jedi" value="Obi-wan">
      Obi-wan
    </Editable>,
  )

  expect(getByLabelText('Jedi')).toBeVisible()
  expect(getByLabelText('Jedi')).toHaveValue('Obi-wan')
})

it('should show the description', () => {
  const { getByText } = render(
    <Editable edit={false} label="Jedi" value="Obi-wan">
      Obi-wan
    </Editable>,
  )

  expect(getByText('Obi-wan')).toBeVisible()
})
