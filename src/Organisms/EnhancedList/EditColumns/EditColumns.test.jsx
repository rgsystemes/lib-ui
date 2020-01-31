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

it('should show/hide columns when clicking on checkboxes', () => {
  const onChange = jest.fn()
  const Wrapper = () => {
    const [cols, setCols] = useState(columns)

    onChange.mockImplementation(
      (columnName, willShow) =>
        setCols(
          cols.map(({ name, show, ...column }) => (
            { name, ...column, show: name === columnName ? willShow : show }
          ))
        )
    )

    return <EditColumns columns={cols} onChange={onChange}/>
  }

  const { getByTestId } = render(<Wrapper />)

  userEvent.click(getByTestId('toggle-column-fruit'))
  userEvent.click(getByTestId('toggle-column-fruit'))
  userEvent.click(getByTestId('toggle-column-burger'))

  expect(onChange).toHaveBeenNthCalledWith(1, 'fruit', false)
  expect(onChange).toHaveBeenNthCalledWith(2, 'fruit', true)
  expect(onChange).toHaveBeenNthCalledWith(3, 'burger', true)
})
