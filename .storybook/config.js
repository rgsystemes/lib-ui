import React from 'react'
import util from '@date-io/date-fns'
import { fr } from 'date-fns/locale'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withTests } from '@storybook/addon-jest'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from '@material-ui/core/styles'

import { MuiPickersUtilsProvider } from '../src/Atoms/DateTimePicker'
import results from '../.jest-test-results.json'
import { muiRg6Theme } from './themes'
import { rg6, dark } from '../src/themes'
import LangSwitcher from './LangSwitcher'
import { locales } from '../src'

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(withThemesProvider([rg6, dark]))
addDecorator(withTests({ results }))
addDecorator(storyFn => <ThemeProvider theme={muiRg6Theme}>{storyFn()}</ThemeProvider>)
addDecorator(storyFn => <MuiPickersUtilsProvider utils={util} locale={fr}>{storyFn()}</MuiPickersUtilsProvider>)
addDecorator(storyFn => <LangSwitcher langs={locales}>{storyFn()}</LangSwitcher>)
// automatically import all files ending in *.stories.jsx
configure(require.context('../src', true, /\.stories\.jsx$/), module)
