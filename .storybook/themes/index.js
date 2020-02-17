import * as rg6Theme from './rg6-theme'
import * as darkTheme from './dark-theme'

const space    = [0, 4, 8, 16, 32].map(value => `${value}px`)
      space.s  = space[1]
      space.m  = space[2]
      space.l  = space[3]
      space.xl = space[4]

const lineHeights         = [0.25, 1, 1.25, 1.42]
      lineHeights.heading = lineHeights[2]
      lineHeights.body    = lineHeights[3]

const levels = {
  error  : {
    background : '#f2dede',
    color      : '#a94442',
    borderColor: '#ebccd1'
  },
  warning: {
    background : '#fcf8e3',
    color      : '#8a6d3b',
    borderColor: '#faebcc',
  },
  success: {
    background : '#dff0d8',
    color      : '#3c763d',
    borderColor: '#d6e9c6',
  },
  info   : {
    background : '#d9edf7',
    color      : '#31708f',
    borderColor: '#bce8f1',
  },
}

const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64, 72]
fontSizes.xs = fontSizes[0]
fontSizes.body = fontSizes[1]
fontSizes.s = fontSizes[1]
fontSizes.m = fontSizes[2]
fontSizes.title = fontSizes[2]
fontSizes.l = fontSizes[3]
fontSizes.xl = fontSizes[4]

const fontWeights = ['lighter', 'normal', 'bold']
fontWeights.body = fontWeights[1]
fontWeights.title = fontWeights[2]

const iconSizes = [16, 22]
iconSizes.small = iconSizes[0]
iconSizes.medium = iconSizes[0]
iconSizes.large = iconSizes[1]

const base = {
  space,
  levels,
  radii: [0, 4],
  fontSizes,
  fontWeights,
  fonts: {
    body:      '"Helvetica Neue", Helvetica, Arial, sans-serif',
    title:     'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: 'monospace',
  },
  lineHeights,
  shadows: {
    m: '0 4px 16px rgba(0,0,0,.175)',
  },
  iconSizes,
}

export const rg6 = { ...base, ...rg6Theme }
export const dark = { ...base, ...darkTheme }
