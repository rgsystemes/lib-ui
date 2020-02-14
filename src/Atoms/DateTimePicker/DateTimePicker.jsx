import React from 'react'
import dateFns from '@date-io/date-fns'
import { CalendarToday } from 'styled-icons/material/CalendarToday'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { MuiPickersUtilsProvider, DateTimePicker as BaseDatePicker } from '@material-ui/pickers'

import TextField from '../TextField'
import InputAdornment from '../Input/InputAdornment'
import IconButton from '../IconButton'
import { useTranslation } from '../../Atoms/Trans'

const theme = createMuiTheme({
  palette: {
    primary:   { main: '#888' },
    secondary: { main: '#f5f5f5' },
  },
})

const DatePicker = ({ ...props }) => {
  const t = useTranslation()
  const { format = t('global.dateFormat') } = props

  return <ThemeProvider theme={theme}>
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
        format={format}
      />
    </MuiPickersUtilsProvider>
  </ThemeProvider>
}

export default DatePicker
