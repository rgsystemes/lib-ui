import { createMuiTheme } from '@material-ui/core/styles'

const fontSizes = [12, 14, 16, 18, 20, 24, 32, 48, 64, 72]

export default createMuiTheme({
  palette: {
    primary:   { main: '#009cb4' },
    secondary: { main: '#f5f5f5' },
    success:   { main: '#5CB85C', contrastText: 'white' },
    info:      { main: '#337AB7' },
    warning:   { main: '#F0AD4E' },
    error:     { main: '#D9534F' },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSizes:  Object.assign(fontSizes, {
      xs:     fontSizes[0],
      body:   fontSizes[1],
      title:  fontSizes[2],
      s:      fontSizes[1],
      m:      fontSizes[2],
      l:      fontSizes[3],
      header: fontSizes[4],
      xl:     fontSizes[5],
    }),
    monospace:  'monospace',
  },
})
