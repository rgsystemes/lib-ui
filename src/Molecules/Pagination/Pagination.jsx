import React, { useState } from 'react'

import { ButtonGroup, Button, Menu, MenuItem } from '../../Atoms'

const Pagination = ({
  onPageChange,
  onSizeChange,
  label,
  openOnTop,
  currentPage = 1,
  sizeOptions = [],
}) => {
  const [anchorEl, setAnchorEl] = useState()
  const handleSizeChange = size => {
    onSizeChange(size)
    setAnchorEl(null)
  }

  return <ButtonGroup size="small">
    <Button data-testid='first' onClick={() => onPageChange(1)}>«</Button>
    <Button data-testid='prev' onClick={() => onPageChange(currentPage - 1)}>‹</Button>
    <Button onClick={event => setAnchorEl(event.currentTarget)}>{label}</Button>
    <Menu
      anchorOrigin={{ vertical: openOnTop ? 'top' : 'bottom' }}
      transformOrigin={{ vertical: openOnTop ? 'bottom' : 'top' }}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      anchorEl={anchorEl}
    >
      {sizeOptions.map(size => <MenuItem onClick={() => handleSizeChange(size)}>{size}</MenuItem>)}
    </Menu>
    <Button data-testid='next' onClick={() => onPageChange(currentPage + 1)}>›</Button>
  </ButtonGroup>
}

export default Pagination
