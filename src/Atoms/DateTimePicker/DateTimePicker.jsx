import React from 'react'
import dateFns from '@date-io/date-fns'
import TextField from '../TextField'
import { CalendarToday } from 'styled-icons/material/CalendarToday'
import InputAdornment from '../Input/InputAdornment'
import IconButton from '../IconButton'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import { MuiPickersUtilsProvider, DateTimePicker as BaseDatePicker } from '@material-ui/pickers'

const theme = createMuiTheme({
  palette: {
    primary:   { main: '#009cb4' },
    secondary: { main: '#f5f5f5' },
  },
})

const DatePicker = ({ ...props }) => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={dateFns}>
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
        {...props}
      />
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

DatePicker.defaultProps = {
  format: 'dd/MM/yyyy hh:mm',
}

export default DatePicker
