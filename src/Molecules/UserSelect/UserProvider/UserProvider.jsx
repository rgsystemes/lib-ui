import React, { useMemo, Children } from 'react'

import UsersContext from '../UsersContext'

const UserProvider = ({
  children, users = [], values = [], onChange = () => {},
}) => {
  const { labels, avatars, statuses } = useMemo(
    () => Children.toArray(users).reduce(
      (acc, child) => Object.assign(acc, {
        labels:   Object.assign(acc.labels, { [child.props.value]: child.props.label || child.props.children }),
        avatars:  Object.assign(acc.avatars, { [child.props.value]: child.props.avatar }),
        statuses: Object.assign(acc.statuses, { [child.props.value]: child.props.status }),
      }),
      {
        labels:   {},
        avatars:  {},
        statuses: {},
      },
    ),
    [children],
  )

  const toggleValue = value => onChange(
    values.includes(value) ? values.filter(v => v !== value) :
    [...values, value],
  )

  return (
    <UsersContext.Provider value={{
      labels,
      avatars,
      statuses,
      toggleValue,
    }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UserProvider
