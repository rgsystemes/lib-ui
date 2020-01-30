import React from 'react'

import Trans, { TransProvider } from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Trans',
}

const translations = {
  global: {
    welcome: 'Hello there !',
  },
}

export const trans = () => (
  <TransProvider value={translations}>
    <Trans transKey="global.welcome"/>
    <br />
    <Trans transKey="global.goodbye"/>
  </TransProvider>
)

trans.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Trans.test.jsx'],
  },
}
