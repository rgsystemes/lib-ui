import React from 'react'

import Box from '@material-ui/core/Box'

import StatusChip from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/StatusChip',
}

const STATUS = [
  'default',
  'primary',
  'success',
  'info',
  'warning',
  'error',
]

export const statusChip = () => (
  <Box fontFamily="fontFamily">
    <h2>Status chip</h2>
    <Box display="flex" flexDirection="column">
      {STATUS.map(status => (
        <Box display="flex" mb={1} justifyContent="space-between" width="250px">
          <Box display="flex" alignItems="center" flex={10}>status {status}: </Box>
          <Box display="flex" alignItems="center" flex={2}><StatusChip status={status} /></Box>
          <Box display="flex" alignItems="center" flex={10}><StatusChip status={status}>With text</StatusChip></Box>
        </Box>
      ))}
    </Box>
  </Box>
)
statusChip.story = {
  parameters: {
    notes: { markdown },
    jest:  ['StatusChip.test.jsx'],
  },
}
