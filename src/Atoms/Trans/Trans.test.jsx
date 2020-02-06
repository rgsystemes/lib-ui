import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Trans, { TransProvider } from './index'

const translations = {
  global: {
    translatedText:               'Bonsoir',
    translatedTextWithParameters: 'Bonsoir %dude% ! Est-ce que tu %verb% ?',
  },
}

it('should translate', () => {
  const { getByText } = render(
    <TransProvider value={translations}>
      <Trans transKey="global.translatedText"/>
    </TransProvider>
  )

  expect(getByText('Bonsoir')).toBeInTheDocument()
})

it('should return transKey when not defined', () => {
  const { getByText } = render(
    <TransProvider value={translations}>
      <Trans transKey="global.notTranslatedText" dude="Bro"/>
    </TransProvider>
  )

  expect(getByText('global.notTranslatedText')).toBeInTheDocument()
})

it('should translate with parameters', () => {
  const { getByText } = render(
    <TransProvider value={translations}>
      <Trans transKey="global.translatedTextWithParameters" dude="bro" verb="lift"/>
    </TransProvider>
  )

  expect(getByText('Bonsoir bro ! Est-ce que tu lift ?')).toBeInTheDocument()
})
