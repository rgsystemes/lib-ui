import * as rg6Theme from './rg6-theme'
import * as darkTheme from './dark-theme'

const space = [0, 4, 8, 16, 32].map(value => `${value}px`)
space.s =  space[1]
space.m =  space[2]
space.l =  space[3]
space.xl = space[4]

const lineHeights = [0.25, 1, 1.25, 1.75]
lineHeights.heading = lineHeights[2]
lineHeights.body =    lineHeights[3]

const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64, 72]
fontSizes.body = fontSizes[1]

const base = {
  space,
  radii: [0, 4],
  fontSizes,
  fonts:            {
    body:      'sans-serif',
    monospace: 'monospace',
  },
  lineHeights,
  shadows: {
    m: '0 4px 16px rgba(0,0,0,.175)'
  }
}

const colors = {
  error  : { bg: '#a94442' },
  warning: '#8a6d3b',
  success: '#3c763d',
  info   : '#31708f',
}

export const rg6 = {
  ...base,
  ...rg6Theme,
  colors: { ...colors, ...rg6Theme.colors }
}

export const dark = {
  ...base,
  ...darkTheme,
  colors: { ...colors, ...darkTheme.colors }
}
