import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'

import BaseTableList from './TableList'

const data = [
  { id: '235', name: 'Obi-wan Kenobi' },
  { id: '236', name: 'Qui-gon Jinn' },
  { id: '237', name: 'Anakin Skywalker' },
]

const columns = [
  { name: 'id' },
  { name: 'name' },
]

const TableList = props =>
  <ThemeProvider theme={{}}>
    <BaseTableList
      data={data}
      columns={columns}
      Details={Details}
      {...props}
    />
  </ThemeProvider>

const Details = ({ id }) =>
  <span>
    Hello I'm {id}
  </span>

it('should show details when selected', () => {
  const { getByText } = render(
    <TableList selected={'235'} />,
  )

  expect(getByText('Hello I\'m 235')).toBeVisible()
  expect(getByText('Hello I\'m 236')).not.toBeVisible()
  expect(getByText('Hello I\'m 237')).not.toBeVisible()
})

it('should show multiple details when an object of selected items is provided', () => {
  const { getByText } = render(
    <TableList selected={{ 235: true, 236: true }} />,
  )

  expect(getByText('Hello I\'m 235')).toBeVisible()
  expect(getByText('Hello I\'m 236')).toBeVisible()
  expect(getByText('Hello I\'m 237')).not.toBeVisible()
})
