import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import { Avatar, Select, Chip } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import Input from '../../Atoms/Input'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'

const chipStyles = makeStyles(({ palette: { success, warning } }) => createStyles({
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
  avatars = {},
  states = {},
  onChange = () => {},
  onDelete = () => {},
  FormControlProps = {},
  InputLabelProps = {},
  InputProps = {},
  UserChipsProps = {},
  MenuProps = {
    anchorReference: null,
    anchorOrigin:    {
      horizontal: 'left',
      vertical:   'bottom',
    },
    marginThreshold: 0,
    PaperProps:      {
      square: true,
    },
  },
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const inputClasses = inputStyles()
  const selectRef = useRef(null)
  MenuProps.getContentAnchorEl = () => selectRef.current

  return (
    <FormControl variant="outlined" {...FormControlProps}>
      <InputLabel {...InputLabelProps}>{label}</InputLabel>
      <Select
        multiple
        ref={selectRef}
        value={value}
        onChange={event => onChange(event.target.value)}
        open={open}
        onOpen={event => setOpen(event.target === event.currentTarget)}
        onClose={() => setOpen(false)}
        variant="outlined"
        input={<Input id="select-multiple-chip" classes={inputClasses} {...InputProps} />}
        renderValue={values => <UserChips
          values={values}
          avatars={avatars}
          states={states}
          onDelete={value => onChange(values.filter(v => v !== value))}
          {...UserChipsProps}
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
