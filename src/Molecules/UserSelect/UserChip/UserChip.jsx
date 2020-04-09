import React from 'react'
import clsx from 'clsx'
import { Avatar, Chip } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const chipStyles = makeStyles(({ palette: { success, warning } }) => createStyles({
  common: {
    marginLeft:   2,
    marginRight:  2,
    marginBottom: 8,
  },
  hasStatus: {
    color: success.contrastText,
  },
  success: {
    backgroundColor: success.main,
  },
  warning: {
    backgroundColor: warning.main,
  },
}))

const UserChip = ({
  value,
  labels = {},
  avatars = {},
  statuses = {},
  onDelete = () => {},
}) => {
  const chipClasses = chipStyles()
  return <Chip
    key={value}
    label={labels[value]}
    onDelete={() => onDelete(value)}
    avatar={avatars[value] ? <Avatar alt={value} src={avatars[value]} /> : undefined}
    className={clsx(chipClasses.common, statuses[value] && chipClasses.hasStatus, chipClasses[statuses[value]])}
  />
}

export default UserChip
