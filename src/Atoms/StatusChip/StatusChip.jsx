import React from 'react'

import Box from '../Box'

const VALID_STATUS = [
  'primary',
  'success',
  'info',
  'warning',
  'error',
]

const StatusChip = ({ status = '', ...props }) => (
  <Box
    boxSizing='border-box'
    display='inline-flex'
    alignItems='center'
    fontSize='caption.fontSize'
    borderRadius={10}
    color={
      VALID_STATUS.includes(status) ? `${status}.contrastText` :
      'grey.contrastText'
    }
    px={1}
    minWidth='18px'
    minHeight='18px'
    bgcolor={
      VALID_STATUS.includes(status) ? `${status}.main` :
      'grey.500'
    }
    {...props}
  />
)

export default StatusChip
