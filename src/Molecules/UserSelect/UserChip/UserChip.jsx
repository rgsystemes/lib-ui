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
  value, label, avatar, status, onDelete = () => {}, ...props
}) => {
  const chipClasses = chipStyles()

  return <Chip
    key={value}
    label={label}
    onDelete={() => onDelete(value)}
    avatar={avatar ? <Avatar alt={avatar} src={avatar} /> : undefined}
    className={clsx(chipClasses.common, status && chipClasses.hasStatus, chipClasses[status])}
    {...props}
  />
}

export default UserChip
