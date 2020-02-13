import React from 'react'
import { TransProvider } from '../src/Atoms/Trans'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withTests } from '@storybook/addon-jest'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from '@material-ui/core/styles'
import results from '../.jest-test-results.json'
import { rg6, dark, muiRg6Theme } from './themes'
import { en } from './locales'

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(withThemesProvider([rg6, dark]))
addDecorator(withTests({ results }))
addDecorator(storyFn => <TransProvider value={en}>{storyFn()}</TransProvider>)
addDecorator(storyFn => <ThemeProvider theme={muiRg6Theme}>{storyFn()}</ThemeProvider>)
// automatically import all files ending in *.stories.jsx
configure(require.context('../src', true, /\.stories\.jsx$/), module)
