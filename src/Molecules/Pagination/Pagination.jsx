import React from 'react'

import { InputGroup, Button } from '../../Atoms'

const display = ({ from, to, total }) => `${from} - ${to} of ${total}`

const Pagination = ({
  onFirst, onPrevious, onNext,
  Display = display,
  currentPage = 1,
  size = 0,
  total = 0,
}) => (
  <InputGroup>
    <Button onClick={onFirst}>«</Button>
    <Button onClick={onPrevious}>‹</Button>
    <Button color='highlight'>
      <Display
        from={total === 0 ? '0' : `${((currentPage - 1) * size) + 1}`}
        to={size * currentPage > total ? `${total}` : `${currentPage * size}`}
        total={total}
      />
    </Button>
    <Button onClick={onNext}>›</Button>
  </InputGroup>
)

export default Pagination
