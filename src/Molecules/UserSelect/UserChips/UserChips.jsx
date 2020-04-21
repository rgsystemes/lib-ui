import React, { useContext } from 'react'

import UserChip from '../UserChip'
import UsersContext from '../UsersContext'

const UserChips = ({
  values = [],
  onChange = () => {},
  ...props
}) => {
  const { labels, avatars, statuses } = useContext(UsersContext)

  return values.map(value => <UserChip
    key={value}
    value={value}
    label={labels[value]}
    avatar={avatars[value]}
    status={statuses[value]}
    onDelete={value => onChange(values.filter(v => v !== value))}
    {...props}
  />)
}

export default UserChips
