import React, { useState } from 'react'

import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'

import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'

const UserChips = ({ values, avatars = [], onDelete }) => <>
  {values.map(value => <Chip
    key={value}
    label={value}
    onDelete={onDelete(value)}
    avatar={avatars[value] ? <Avatar alt={value} src={avatars[value]} /> : undefined}
  />)}
</>

const UserSelect = ({
  children,
  label,
  value,
  MenuProps,
  avatars = [],
  onChange = () => {},
  onDelete = () => {},
}) => {
  const [open, setOpen] = useState(false)
  return (
    <FormControl variant="outlined">
      <InputLabel>
        {label}
        <Select
          multiple
          value={value}
          onChange={onChange}
          open={open}
          data-set-open
          onOpen={event => event.target.parentNode.dataset.setOpen && setOpen(true)}
          onClose={() => setOpen(false)}
          variant="outlined"
          input={<Input id="select-multiple-chip" />}
          renderValue={values => <UserChips
            avatars={avatars}
            values={values}
            onDelete={value => () => onChange({ target: { value: values.filter(v => v !== value) } })}
          />}
          MenuProps={MenuProps}
        >
          {children}
        </Select>
      </InputLabel>
    </FormControl>
  )
}

export default UserSelect
