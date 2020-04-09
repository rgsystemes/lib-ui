import React, {
  useMemo, useState, Children, createContext, useContext, forwardRef,
} from 'react'
import clsx from 'clsx'
import { Avatar, Select, Chip } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Check } from '@styled-icons/boxicons-regular'
import { Circle } from '@styled-icons/boxicons-solid'

import Input from '../../Atoms/Input'
import Typo from '../../Atoms/Typo'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'
import FlexBox from '../../Templates/FlexBox'

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

const inputStyles = makeStyles({
  root: {
    height:                  'auto !important', // FIXME: refacto input instead
    borderBottomLeftRadius:  '0 !important', // FIXME: refacto input instead
    borderBottomRightRadius: '0 !important', // FIXME: refacto input instead
  },
  input: {
    padding:    '8px 32px 0 8px !important', // FIXME: refacto input instead
    minHeight:  40,
    whiteSpace: 'initial',
  },
})

const menuListStyles = makeStyles(theme => createStyles({
  root: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[500],
  },
}))

const UsersContext = createContext({})

const UserSelect = ({
  children, label, values, onChange = () => {}, ...props
}) => {
  const [open, setOpen] = useState(false)
  const inputClasses = inputStyles()
  const menuListClasses = menuListStyles()

  const { labels, avatars, statuses } = useMemo(
    () => Children.toArray(children).reduce(
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
    <UsersContext.Provider value={{ toggleValue, values }}>
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          value={values}
          onChange={onChange}
          open={open}
          onOpen={event => setOpen(event.target === event.currentTarget)}
          onClose={() => setOpen(false)}
          variant="outlined"
          input={<Input classes={inputClasses} />}
          renderValue={values => values.map(value => <UserChip
            key={value}
            value={value}
            labels={labels}
            avatars={avatars}
            statuses={statuses}
            onDelete={value => onChange(values.filter(v => v !== value))}
          />)}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin:       {
              horizontal: 'left',
              vertical:   'bottom',
            },
            marginThreshold: 0,
            PaperProps:      {
              square: true,
            },
            MenuListProps: {
              disablePadding: true,
              classes:        menuListClasses,
            },
          }}
          {...props}
        >
          {children}
        </Select>
      </FormControl>
    </UsersContext.Provider>
  )
}

export default UserSelect
