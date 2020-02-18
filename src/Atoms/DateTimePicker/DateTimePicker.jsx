import React from 'react'
import { CalendarToday } from 'styled-icons/material/CalendarToday'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { DateTimePicker as BaseDatePicker } from '@material-ui/pickers'

import TextField from '../TextField'
import InputAdornment from '../Input/InputAdornment'
import IconButton from '../IconButton'

const theme = createMuiTheme({
  palette: {
    primary:   { main: '#888' },
    secondary: { main: '#f5f5f5' },
  },
})

const DatePicker = ({ format = 'Pp', ...props }) =>
  <ThemeProvider theme={theme}>
    <BaseDatePicker
      TextFieldComponent={TextField}
      variant="inline"
      KeyboardButtonProps={{ disableRipple: true }}
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
  </ThemeProvider>

export default DatePicker
