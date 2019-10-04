import React from 'react'
import { InputGroup, Button, Select } from '../../Atoms'

const displayValue = ({ from, to, total }) => `${from} - ${to} of ${total}`
const displayOption = ({ count }) => `${count} per page`

const Pagination = ({
  onPageChange,
  onSizeChange,
  DisplayValue = displayValue,
  DisplayOption = displayOption,
  currentPage = 1,
  size = 0,
  total = 0,
  sizeOptions = [],
}) => (
  <InputGroup>
    <Button data-testid='first' onClick={() => onPageChange(1)}>«</Button>
    <Button data-testid='prev' onClick={() => onPageChange(currentPage - 1)}>‹</Button>
    <Select
      color='highlight'
      onChange={onSizeChange}
      displayValue={<DisplayValue
        from={total === 0 ? '0' : `${((currentPage - 1) * size) + 1}`}
        to={size * currentPage > total ? `${total}` : `${currentPage * size}`}
        total={total}
      />}
      options={sizeOptions.map(value => ({
        value,
        Component: ({ children }) => <DisplayOption count={children} />,
      }))}
    />
    <Button data-testid='next' onClick={() => onPageChange(currentPage + 1)}>›</Button>
  </InputGroup>
)

export default Pagination
