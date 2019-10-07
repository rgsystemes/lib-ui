import React from 'react'
import { InputGroup, Button, Select } from '../../Atoms'

const Pagination = ({
  onPageChange,
  onSizeChange,
  label,
  openOnTop,
  currentPage = 1,
  sizeOptions = [],
}) => (
  <InputGroup>
    <Button data-testid='first' onClick={() => onPageChange(1)}>«</Button>
    <Button data-testid='prev' onClick={() => onPageChange(currentPage - 1)}>‹</Button>
    <Select
      openOnTop={openOnTop}
      color='highlight'
      onChange={onSizeChange}
      label={label}
      options={sizeOptions}
    />
    <Button data-testid='next' onClick={() => onPageChange(currentPage + 1)}>›</Button>
  </InputGroup>
)

export default Pagination
