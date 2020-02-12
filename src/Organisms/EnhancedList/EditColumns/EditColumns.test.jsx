import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import BaseEditColumns from './index'

const EditColumns = props => <ThemeProvider theme={{}}>
  <BaseEditColumns {...props} />
</ThemeProvider>

const columns = [
  { name: 'fruit', translationKey: 'Fruit', show: true },
  { name: 'veggie', translationKey: 'Veggie', show: true },
  { name: 'burger', translationKey: 'Burger', show: false },
]

const Wrapper = () => {
  const [cols, setCols] = useState(columns)

  const onChange =
    columnName =>
      setCols(
        cols.map(({ name, show, ...column }) => (
          { name, ...column, show: name === columnName ? !show : show }
        )),
      )

  return <EditColumns columns={cols} onChange={onChange}/>
}

it('should show/hide columns when clicking on checkboxes', () => {
  const { getByText } = render(<EditColumns columns={columns} />)

  expect(getByText('global.editColumns.enabledColumns').closest('ul')).toHaveTextContent(/Fruit/i)
  expect(getByText('global.editColumns.enabledColumns').closest('ul')).toHaveTextContent(/Veggie/i)
  expect(getByText('global.editColumns.disabledColumns').closest('ul')).toHaveTextContent(/Burger/i)
})

it('should show/hide columns when clicking on checkboxes', () => {
  const { getByText } = render(<Wrapper />)

  userEvent.click(getByText('Fruit'))
  userEvent.click(getByText('Burger'))

  expect(getByText('global.editColumns.disabledColumns').closest('ul')).toHaveTextContent(/Fruit/i)
  expect(getByText('global.editColumns.enabledColumns').closest('ul')).toHaveTextContent(/Burger/i)
})
