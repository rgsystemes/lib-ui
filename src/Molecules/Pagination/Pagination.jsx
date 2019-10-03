import React from 'react'
import { InputGroup, Button, Select } from '../../Atoms'

const display = ({ from, to, total }) => `${from} - ${to} of ${total}`

const Pagination = ({
  onPageChange,
  onSizeChange,
  DisplayValue = display,
  DisplayOption,
  currentPage = 1,
  size = 0,
  total = 0,
  sizeOptions = [],
}) => (
  <InputGroup>
    <Button onClick={() => onPageChange(1)}>«</Button>
    <Button onClick={() => onPageChange(currentPage - 1)}>‹</Button>
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
    <Button onClick={() => onPageChange(currentPage + 1)}>›</Button>
  </InputGroup>
)

export default Pagination
