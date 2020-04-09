import React, { useContext, forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Check } from '@styled-icons/boxicons-regular'
import { Circle } from '@styled-icons/boxicons-solid'

import Typo from '../../../Atoms/Typo'
import FlexBox from '../../../Templates/FlexBox'
import UsersContext from '../UsersContext'

const avatarStyles = makeStyles({
  root: {
    width:  30,
    height: 30,
  },
})

export const User = forwardRef(({
  children, value, avatar, status, selected, ...props
}, ref) => {
  value = value || props['data-value'] // https://github.com/mui-org/material-ui/pull/10538/files#diff-c94cda3eaf59068537e62cfc08a1d76aR258
  const { toggleValue } = useContext(UsersContext)
  const avatarClasses = avatarStyles()

  return (
    <FlexBox
      component="li"
      alignItems="center"
      css={{
        '&': {
          cursor: 'pointer',
        },
        '&:first-child': {
          borderTop: 'none',
        },
      }}
      borderTop="1px solid"
      borderColor="grey.500"
      height={50}
      gap={1}
      onClick={() => toggleValue(value)}
    >
      <FlexBox component={selected ? Check : null} alignItems="center" width={60} size="30px" />
      <FlexBox component={avatar ? Avatar : null} alt={avatar} src={avatar} classes={avatarClasses} />
      <FlexBox flexGrow={1} component={Typo}>{children}</FlexBox>
      <FlexBox component={status ? Circle : null} alignItems="center" color={`${status}.main`} width={60} size="30" title={status} />
    </FlexBox>
  )
})

export default User
