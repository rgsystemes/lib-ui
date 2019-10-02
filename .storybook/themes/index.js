import * as rg6Theme from './rg6-theme'
import * as darkTheme from './dark-theme'

const space = [0, 4, 8, 16, 32].map(value => `${value}px`)
space.s = space[1]
space.m = space[2]
space.l = space[3]
space.xl = space[4]

const base = {
  space,
  radii: [0, 4],
  fonts:            {
    body:      'sans-serif',
    monospace: 'monospace',
  },
  fontSizes:   [12, 14, 16, 18, 24, 32, 48, 64, 72],
  lineHeights: {
    body:    1.75,
    heading: 1.25,
  },
}

export const rg6 = { ...base, ...rg6Theme }
export const dark = { ...base, ...darkTheme }
