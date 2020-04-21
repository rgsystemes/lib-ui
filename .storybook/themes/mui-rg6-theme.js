import { createMuiTheme } from '@material-ui/core/styles'
import Base from '../../src/themes'

export default createMuiTheme({
  palette: {
    primary:   { main: '#009cb4' },
    secondary: { main: '#f5f5f5' },
    success:   { main: '#57B85A', contrastText: 'white' },
    info:      { main: '#006AA1' },
    warning:   { main: '#F0AD4E' },
    error:     { main: '#D9534F' },
  },
  typography: {
    fontFamily: Base.fonts.body,
    fontSizes:  Base.fontSizes,
    monospace:  Base.fonts.monospace,
  },
})
