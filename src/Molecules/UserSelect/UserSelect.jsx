import React, { useState, Children } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { useTranslation } from '../../Atoms/Trans'
import TextField from '../../Atoms/TextField'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'

import User from './User'
import UserChips from './UserChips'
import UserProvider from './UserProvider'

const autocompleteStyles = makeStyles(theme => createStyles({
  inputRoot: {
    border:                              '0 !important', // FIXME: refacto input instead
    borderBottomLeftRadius:              '0 !important', // FIXME: refacto input instead
    borderBottomRightRadius:             '0 !important', // FIXME: refacto input instead
    minHeight:                           50,
    '&[class*="MuiOutlinedInput-root"]': {
      paddingTop:                                     6,
      paddingBottom:                                  6,
      paddingLeft:                                    9,
      '& [class*="MuiOutlinedInput-notchedOutline"]': {
        borderColor: 'lightgrey',
        borderWidth: 1,
      },
      '&:hover': {
        '& [class*="MuiOutlinedInput-notchedOutline"]': {
          borderColor: 'lightgrey',
        },
      },
      '&[class*="Mui-focused"] [class*="MuiOutlinedInput-notchedOutline"]': {
        borderColor: '#66afe9',
      },
      '&[class*="Mui-focused"]:hover [class*="MuiOutlinedInput-notchedOutline"]': {
        borderColor: '#66afe9',
      },
    },
    '& input': {
      padding:  '9.5px 4px !important', // FIXME: refacto input instead
      minWidth: '75px', // FIXME: https://github.com/mui-org/material-ui/blob/master/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L446-L452
    },
  },
  option: {
    '&[aria-selected="true"]': {
      backgroundColor:        'transparent',
      '&[data-focus="true"]': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  },
  listbox: {
    padding:     0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    '& li':      {
      padding:               0,
      '&:not(:first-child)': {
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'lightgrey',
      },
    },
  },
  paper: {
    margin:       0,
    borderRadius: 0,
  },
}))

const formControlStyles = makeStyles({
  root: {
    display: 'flex',
  },
})

const UserSelect = ({
  children, id = '', label = '', placeholder = '', values = [], onChange = () => {}, onError = () => {}, ...props
}) => {
  const [open, setOpen] = useState(false)
  const t = useTranslation()
  const autocompleteClasses = autocompleteStyles()
  const formControlClasses = formControlStyles()

  const labelId = `users-${id}`
  const options = Children.toArray(children).map(child => child.props)
  const isMultiple = Array.isArray(values)

  return (
    <UserProvider options={options} values={values}>
      <FormControl variant="outlined" classes={formControlClasses}>
        <InputLabel htmlFor={labelId}>{label}</InputLabel>
        <Autocomplete
          multiple={isMultiple}
          value={values}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          options={options}
          id={labelId}
          renderInput={params => <TextField variant="outlined" placeholder={!values || values.length === 0 ? placeholder : ''} {...params} />}
          renderTags={values => <UserChips values={values} onChange={onChange} />}
          renderOption={props => <User {...props} />}
          getOptionLabel={option => (typeof option === 'object' ? option : options.find(({ value }) => value === option) || {}).children || ''}
          getOptionSelected={({ value }, _value) => value === _value}
          autoHighlight
          disableClearable={isMultiple}
          freeSolo
          openOnFocus
          forcePopupIcon
          classes={autocompleteClasses}
          openText={t('global.open')}
          closeText={t('global.close')}
          clearText={t('global.clear')}
          onChange={(event, changedValues, reason) => {
            if (reason === 'create-option') {
              const value = isMultiple ? changedValues.slice(-1)[0] : changedValues
              if (!/^\S+@\S+$/.test(value)) {
                return onError({ error: 'email_validation_failed' })
              }
              if (isMultiple ? values.includes(value) : values === value) {
                return onError({ error: 'email_already_exist' })
              }
            } else if (reason === 'select-option') {
              const { value } = isMultiple ? changedValues.pop() : changedValues
              if (isMultiple) {
                changedValues.push(value)
              } else {
                changedValues = value
              }
            }
            onChange(changedValues)
          }}
          variant="outlined"
          name="users"
          {...props}
        />
      </FormControl>
    </UserProvider>
  )
}

export default UserSelect
