import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import BaseSortedColumn from './index'

const columns = ['fruit', 'veggie', 'burger']
const SortedColumn = props => <ThemeProvider theme={{}}>
  <table>
    <tbody>
      <tr>
        <BaseSortedColumn {...props}/>
      </tr>
    </tbody>
  </table>
</ThemeProvider>

it('should not show the filter icon when onFilter is not defined', () => {
  const { queryByTestId } = render(
    <SortedColumn name="fruit">
      Fruit
    </SortedColumn>
  )

  expect(queryByTestId('filter-column-fruit')).toBeNull()
})

it('should not show the sort icon when onSort is not defined', () => {
  const { queryByTestId } = render(
    <SortedColumn name="fruit">
      Fruit
    </SortedColumn>
  )

  expect(queryByTestId('sort-column-fruit')).toBeNull()
})

it('should call onSort when clicking on the column', () => {
  const onSort = jest.fn()
  const { getByText } = render(
    <SortedColumn name="fruit" onSort={onSort}>
      Fruit
    </SortedColumn>
  )

  userEvent.click(getByText('Fruit'))

  expect(onSort).toBeCalledTimes(1)
})

it('should call onSort cycling', () => {
  const onSort = jest.fn()

  const Wrapper = () => {
    const [sort, setSort] = useState()
    const [way, setWay] = useState()

    onSort.mockImplementation((sort, way) => {
      setSort(sort)
      setWay(way)
    })

    return <SortedColumn name="fruit" sort={sort === 'fruit' && way} onSort={onSort}>
      Fruit
    </SortedColumn>
  }

  const { getByText } = render(<Wrapper />)

  userEvent.click(getByText('Fruit'))
  userEvent.click(getByText('Fruit'))
  userEvent.click(getByText('Fruit'))
  userEvent.click(getByText('Fruit'))

  expect(onSort).toHaveBeenNthCalledWith(1, 'fruit', 'desc')
  expect(onSort).toHaveBeenNthCalledWith(2, 'fruit', 'asc')
  expect(onSort).toHaveBeenNthCalledWith(3, null, null)
  expect(onSort).toHaveBeenNthCalledWith(4, 'fruit', 'desc')
  expect(onSort).toBeCalledTimes(4)
})

it('should reset sorting when clicking on another column', () => {
  const onSort = jest.fn()

  const Wrapper = () => {
    const [sort, setSort] = useState()
    const [way, setWay] = useState()

    onSort.mockImplementation((sort, way) => {
      setSort(sort)
      setWay(way)
    })

    return columns.map(col =>
      <SortedColumn name={col} sort={sort === col && way} onSort={onSort} key={col}>
        {col}
      </SortedColumn>
    )
  }

  const { getByText } = render(<Wrapper />)

  userEvent.click(getByText('fruit'))
  userEvent.click(getByText('burger'))
  userEvent.click(getByText('veggie'))
  userEvent.click(getByText('veggie'))

  expect(onSort).toHaveBeenNthCalledWith(1, 'fruit', 'desc')
  expect(onSort).toHaveBeenNthCalledWith(2, 'burger', 'desc')
  expect(onSort).toHaveBeenNthCalledWith(3, 'veggie', 'desc')
  expect(onSort).toHaveBeenNthCalledWith(4, 'veggie', 'asc')
})
