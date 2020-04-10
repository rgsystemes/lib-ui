import React, { useState } from 'react'
import { Select } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import Input from '../../Atoms/Input'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'
import UserChips from './UserChips'
import UserProvider from './UserProvider'

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

const UserSelect = ({
  children, label, values = [], onChange = () => {}, ...props
}) => {
  const [open, setOpen] = useState(false)
  const inputClasses = inputStyles()
  const menuListClasses = menuListStyles()

  return (
    <UserProvider users={children} values={values} onChange={onChange}>
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
          renderValue={values => <UserChips values={values} onChange={onChange} />}
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
    </UserProvider>
  )
}

export default UserSelect
