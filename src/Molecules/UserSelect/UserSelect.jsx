import React, { useState } from 'react'
import clsx from 'clsx'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

import Input from '../../Atoms/Input'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'

const chipStyles = makeStyles(({ palette: { success, warning } }) => ({
  common: {
    marginLeft:  2,
    marginRight: 2,
  },
  hasState: {
    color: success.contrastText,
  },
  success: {
    backgroundColor: success.main,
  },
  warning: {
    backgroundColor: warning.main,
  },
}))

const UserChips = ({
  values = [],
  avatars = {},
  states = {},
  onDelete = () => {},
}) => {
  const chipClasses = chipStyles()
  return values.map(value => <Chip
    key={value}
    label={value}
    onDelete={() => onDelete(value)}
    avatar={avatars[value] ? <Avatar alt={value} src={avatars[value]} /> : undefined}
    className={clsx(chipClasses.common, states[value] && chipClasses.hasState, chipClasses[states[value]])}
  />)
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

const UserSelect = ({
  children,
  label,
  value,
  MenuProps,
  avatars = {},
  states = {},
  onChange = () => {},
  onDelete = () => {},
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const inputClasses = inputStyles()
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={event => onChange(event.target.value)}
        open={open}
        data-set-open
        onOpen={event => event.target.parentNode.dataset.setOpen && setOpen(true)}
        onClose={() => setOpen(false)}
        variant="outlined"
        input={<Input id="select-multiple-chip" classes={inputClasses} />}
        renderValue={values => <UserChips
          values={values}
          avatars={avatars}
          states={states}
          onDelete={value => onChange(values.filter(v => v !== value))}
        />}
        MenuProps={MenuProps}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  )
}

export default UserSelect
