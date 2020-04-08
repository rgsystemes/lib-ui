import React, { useMemo, useState, Children, forwardRef } from 'react'
import clsx from 'clsx'
import { Avatar, Select, Chip, MenuItem } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Check } from '@styled-icons/boxicons-regular'
import { Circle } from '@styled-icons/boxicons-solid'

import Icon from '../../Atoms/Icon'
import Input from '../../Atoms/Input'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'

const chipStyles = makeStyles(({ palette: { success, warning } }) => createStyles({
  common: {
    marginLeft:  2,
    marginRight: 2,
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

const inputStyles = makeStyles({
  root: {
    height: 'auto !important',
  },
  input: {
    paddingLeft:  '8px !important',
    paddingRight: '32px !important',
    minHeight:    32,
  },
})

const userStyles = makeStyles(({ palette: { success, warning } }) => createStyles({
  success: {
    color: success.main,
  },
  warning: {
    color: warning.main,
  },
}))

export const UserOption = forwardRef(({
  children,
  value,
  checked = false,
  values = [],
  onChange = () => {},
  avatar,
  status,
  ...props
}, ref) => {
  value = value || props['data-value'] // hack
  const userClasses = userStyles()
  return (
    <MenuItem ref={ref} value={value} onClick={() => onChange(checked ? values.filter(v => v !== value) : [...values, value])}>
      <Icon Component={props => checked ? <Check {...props} /> : null} />
      {!!avatar && <Avatar alt={value} src={avatar} />}
      {children}
      {!!status && <Circle size="30" className={userClasses[status]} />}
    </MenuItem>
  )
})

const UserSelect = ({
  children,
  label,
  values,
  onChange = () => {},
  onDelete = () => {},
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const inputClasses = inputStyles()
  const { labels, avatars, statuses } = useMemo(() =>
    Children.toArray(children).reduce(
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

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      {React.createElement(Select, {
        multiple:    true,
        value:       values,
        onChange,
        open,
        onOpen:      event => setOpen(event.target === event.currentTarget),
        onClose:     () => setOpen(false),
        variant:     'outlined',
        input:       <Input id="select-multiple-chip" classes={inputClasses} />,
        renderValue: values => values.map(value => <UserChip
          value={value}
          labels={labels}
          avatars={avatars}
          statuses={statuses}
          onDelete={value => onChange(values.filter(v => v !== value))}
        />),
        MenuProps: {
          getContentAnchorEl: null,
          anchorOrigin:       {
            horizontal: 'left',
            vertical:   'bottom',
          },
          marginThreshold: 0,
          PaperProps:      {
            square: true,
          },
        },
        ...props,
      },
      ...(Children.toArray(children).map(
        child => <UserOption
          values={values}
          checked={!!(values.find(v => v === child.props.value))}
          onChange={onChange}
          {...child.props}
        />,
      ) || []),
      )}
    </FormControl>
  )
}

export default UserSelect
