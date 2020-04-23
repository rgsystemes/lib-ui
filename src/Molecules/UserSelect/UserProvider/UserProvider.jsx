import React, { useMemo } from 'react'

import UsersContext from '../UsersContext'

const UserProvider = ({
  children, options = [], values = [],
}) => {
  if (!Array.isArray(values)) {
    values = [values]
  }
  const { labels, avatars, statuses } = useMemo(
    () => options.reduce(
      (acc, option) => Object.assign(acc, {
        labels:   Object.assign(acc.labels, { [option.value]: option.label || option.children }),
        avatars:  Object.assign(acc.avatars, { [option.value]: option.avatar }),
        statuses: Object.assign(acc.statuses, { [option.value]: option.status }),
      }),
      {
        labels: values.reduce(
          (acc, value) => typeof (value) === 'string' && value.indexOf('@') ? Object.assign(acc, { [value]: value }) :
          acc,
          {},
        ),
        avatars:  {},
        statuses: values.reduce(
          (acc, value) => typeof (value) === 'string' && value.indexOf('@') ? Object.assign(acc, { [value]: 'info' }) :
          acc,
          {},
        ),
      },
    ),
    [options],
  )

  return (
    <UsersContext.Provider value={{
      labels,
      avatars,
      statuses,
      values,
    }}>
      {children}
    </UsersContext.Provider>
  )
}

export default UserProvider
