import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Trans, { TransProvider } from './index'

const translations = {
  global: {
    tamer: 'Bonsoir',
  },
}

it('should trans', () => {
  const { getByText } = render(
    <TransProvider value={translations}>
      <Trans transKey="global.tamer"/>
    </TransProvider>
  )

  expect(getByText('Bonsoir')).toBeInTheDocument()
})

it('should return transKey when not defined', () => {
  const { getByText } = render(
    <TransProvider value={translations}>
      <Trans transKey="global.noel.mamer"/>
    </TransProvider>
  )

  expect(getByText('global.noel.mamer')).toBeInTheDocument()
})
