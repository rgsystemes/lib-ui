import React, { useState } from 'react'

import {
  useTranslation,
  ButtonGroup,
  Button,
  Menu,
  MenuItem,
} from '../../Atoms'

const Pagination = ({
  onPageChange,
  onSizeChange,
  label = '...',
  openOnTop,
  currentPage = 1,
  sizeOptions = [],
  disabledPrevious = false,
  disabledNext = false,
  disabledFirst = false,
}) => {
  const [anchorEl, setAnchorEl] = useState()
  const t = useTranslation()
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
      {sizeOptions.map(size =>
        <MenuItem
          key={size}
          data-testid={`option-${size}`}
          onClick={() => handleSizeChange(size)}
        >
          {t('global.pagination.perPage', { count: size })}
        </MenuItem>,
      )}
    </Menu>
    <ButtonGroup size="small">
      <Button data-testid="first" onClick={() => onPageChange(1)} disabled={disabledFirst}>«</Button>
      <Button data-testid="prev" onClick={() => onPageChange(currentPage - 1)} disabled={disabledPrevious}>‹</Button>
      <Button data-testid="select" onClick={event => setAnchorEl(event.currentTarget)}>{label}</Button>
      <Button data-testid="next" onClick={() => onPageChange(currentPage + 1)} disabled={disabledNext}>›</Button>
    </ButtonGroup>
  </>
}

export default Pagination
