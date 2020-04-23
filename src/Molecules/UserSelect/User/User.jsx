import React, { useContext } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Check } from '@styled-icons/boxicons-regular'
import { Circle } from '@styled-icons/boxicons-solid'

import Tooltip from '../../../Atoms/Tooltip'
import Typo from '../../../Atoms/Typo'
import FlexBox from '../../../Templates/FlexBox'
import UsersContext from '../UsersContext'

const avatarStyles = makeStyles({
  root: {
    width:  25,
    height: 25,
  },
})

const tooltipStyles = makeStyles({
  tooltip: {
    maxWidth:  250,
    textAlign: 'center',
  },
})

export const User = ({
  children,
  value,
  avatar,
  status,
  tooltip,
}) => {
  const avatarClasses = avatarStyles()
  const tooltipClasses = tooltipStyles()
  const { values } = useContext(UsersContext)
  const selected = values.includes(value)

  return (
    <FlexBox
      alignItems="center"
      height={32}
      gap={1}
      flexGrow={1}
    >
      <FlexBox component={selected ? Check : null} width={45} size={25} marginLeft={1} />
      <FlexBox component={avatar ? Avatar : null} alt={avatar} src={avatar} classes={avatar ? avatarClasses : null} />
      <FlexBox flexGrow={1} component={Typo}>{children}</FlexBox>
      <Tooltip title={tooltip} placement="bottom" classes={tooltipClasses}>
        <span>{/* FIXME: add forwardRef to Tooltip */}
          <FlexBox component={status ? Circle : null} color={`${status}.main`} width={60} size={25} />
        </span>
      </Tooltip>
    </FlexBox>
  )
}

export default User
