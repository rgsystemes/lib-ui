import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'

import Pagination from './index'
import { ThemeProvider } from 'styled-components'

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{}}>
    {children}
  </ThemeProvider>
)

it('should call onPageChange when user clicks first', () => {
  const onPageChange = jest.fn()
  const { getByTestId } = render(
    <Wrapper>
      <Pagination onPageChange={onPageChange} />
    </Wrapper>
  )

  user.click(getByTestId('first'))

  expect(onPageChange).toHaveBeenCalledWith(1)
})

it('should call onPageChange when user clicks prev', () => {
  const onPageChange = jest.fn()
  const { getByTestId } = render(
    <Wrapper>
      <Pagination currentPage={12} onPageChange={onPageChange} />
    </Wrapper>
  )

  user.click(getByTestId('prev'))

  expect(onPageChange).toHaveBeenCalledWith(11)
})

it('should call onPageChange when user clicks next', () => {
  const onPageChange = jest.fn()
  const { getByTestId } = render(
    <Wrapper>
      <Pagination onPageChange={onPageChange} />
    </Wrapper>
  )

  user.click(getByTestId('next'))

  expect(onPageChange).toHaveBeenCalledWith(2)
})

it('should call onSizeChange when user select another size', async () => {
  const onSizeChange = jest.fn()

  const { getByTestId, findByTestId } = render(
    <Wrapper>
      <Pagination sizeOptions={[{ size: 10 }, { size: 20 }, { size: 30 }]} onSizeChange={onSizeChange} />
    </Wrapper>
  )

  user.click(getByTestId('select'))
  user.click(await findByTestId('option-20'))

  expect(onSizeChange).toHaveBeenCalledWith(20)
})
