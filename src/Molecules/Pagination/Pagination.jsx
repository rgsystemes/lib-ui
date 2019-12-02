import React, { useState } from 'react'

import { ButtonGroup, Button, Menu, MenuItem } from '../../Atoms'

const Pagination = ({
  onPageChange,
  onSizeChange,
  label = '...',
  openOnTop,
  currentPage = 1,
  sizeOptions = [],
}) => {
  const [anchorEl, setAnchorEl] = useState()
  const handleSizeChange = size => {
    onSizeChange(size)
    setAnchorEl(null)
  }

  return <>
    <Menu
      anchorOrigin={{ vertical: openOnTop ? 'top' : 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: openOnTop ? 'bottom' : 'top', horizontal: 'left' }}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      anchorEl={anchorEl}
    >
      {sizeOptions.map(size => <MenuItem key={size} data-testid={`option-${size}`} onClick={() => handleSizeChange(size)}>{size}</MenuItem>)}
    </Menu>
    <ButtonGroup size="small">
      <Button data-testid='first' onClick={() => onPageChange(1)}>«</Button>
      <Button data-testid='prev' onClick={() => onPageChange(currentPage - 1)}>‹</Button>
      <Button data-testid="select" onClick={event => setAnchorEl(event.currentTarget)}>{label}</Button>
      <Button data-testid='next' onClick={() => onPageChange(currentPage + 1)}>›</Button>
    </ButtonGroup>
  </>
}

export default Pagination
