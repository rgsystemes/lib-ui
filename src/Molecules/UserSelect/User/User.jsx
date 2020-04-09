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
  children, value, avatar, status, ...props
}, ref) => {
  value = value || props['data-value'] // https://github.com/mui-org/material-ui/pull/10538/files#diff-c94cda3eaf59068537e62cfc08a1d76aR258
  const { toggleValue, values } = useContext(UsersContext)
  const checked = values.includes(value)
  const avatarClasses = avatarStyles()

  return (
    <FlexBox component="li" alignItems="center" css={{ '&:first-child': { borderTop: 'none' }, '&': { cursor: 'pointer' } }} borderTop="1px solid" borderColor="grey.500" height={50} gap={1} onClick={() => toggleValue(value)}>
      <FlexBox component={checked ? Check : null} alignItems="center" width={60} size="30px" />
      <FlexBox component={avatar ? Avatar : null} alt={value} src={avatar} classes={avatarClasses} />
      <FlexBox flexGrow={1} component={Typo}>{children}</FlexBox>
      <FlexBox component={status ? Circle : null} alignItems="center" color={`${status}.main`} width={60} size="30" title={status} />
    </FlexBox>
  )
})

export default User
