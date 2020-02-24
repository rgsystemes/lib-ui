import React from 'react'
import { CalendarToday } from 'styled-icons/material/CalendarToday'
import { DateTimePicker as BaseDatePicker } from '@material-ui/pickers'

import TextField from '../TextField'
import InputAdornment from '../Input/InputAdornment'
import IconButton from '../IconButton'

const DatePicker = ({ format = 'Pp', disableAmPm = true, ...props }) =>
  <BaseDatePicker
    TextFieldComponent={TextField}
    variant="inline"
    KeyboardButtonProps={{ disableRipple: true }}
    ampm={!disableAmPm}
    InputProps={{
      endAdornment: (
        <InputAdornment>
          <IconButton>
            <CalendarToday size={20} />
          </IconButton>
        </InputAdornment>
      ),
    }}
    format={format}
    {...props}
  />

export default DatePicker
