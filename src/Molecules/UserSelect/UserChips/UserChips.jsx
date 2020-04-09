import React, { useContext } from 'react'

import UserChip from '../UserChip'
import UsersContext from '../UsersContext'

const UserChips = ({
  values,
  onChange = () => {},
}) => {
  const { labels, avatars, statuses } = useContext(UsersContext)
  return values.map(value => <UserChip
    key={value}
    value={value}
    labels={labels}
    avatars={avatars}
    statuses={statuses}
    onDelete={value => onChange(values.filter(v => v !== value))}
  />)
}

export default UserChips
