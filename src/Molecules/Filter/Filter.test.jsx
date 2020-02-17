import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { TransProvider } from '../../Atoms/Trans'
import { ThemeProvider } from 'styled-components'

import BaseFilter from './index'

const Filter = props =>
  <TransProvider value={{}}>
    <ThemeProvider theme={{}}>
      <BaseFilter {...props} />
    </ThemeProvider>
  </TransProvider>

it('should call onChange on blur', () => {
  const onChange = jest.fn()

  const { getByLabelText } = render(
    <Filter
      type="text"
      value=""
      translationKey="Input"
      onChange={onChange}
    />
  )

  userEvent.type(getByLabelText('Input'), 'Bonsoir')
  fireEvent.blur(getByLabelText('Input'))
  expect(onChange).toBeCalledWith('Bonsoir')
})
