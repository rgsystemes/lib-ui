import React from 'react'
import { render } from '@testing-library/react'
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

it('should call onChange on validate', async () => {
  const onChange = jest.fn()

  const { getByLabelText, getByText } = render(
    <Filter
      type="text"
      value=""
      translationKey="Input"
      onChange={onChange}
    />,
  )

  userEvent.click(getByLabelText('open filter'))

  await userEvent.type(getByLabelText('Input'), 'Bonsoir')
  userEvent.click(getByText('global.filter.applyFilter'))
  expect(onChange).toBeCalledWith('Bonsoir')
})

it('should call on clear when clicking on trash icon', () => {
  const onClear = jest.fn()
  const { getByText, getByLabelText } = render(<Filter onClear={onClear}/>)

  userEvent.click(getByLabelText('open filter'))
  userEvent.click(getByText('global.action.remove'))
  expect(onClear).toHaveBeenCalled()
})

it('should call onChange only when value has changed', async () => {
  const onChange = jest.fn()

  const { getByLabelText, getByText } = render(
    <Filter
      type="text"
      value="Bonsoir"
      translationKey="Input"
      onChange={onChange}
    />,
  )

  userEvent.click(getByLabelText('open filter'))
  await userEvent.type(getByLabelText('Input'), 'Bonsoir')

  userEvent.click(getByText('global.filter.applyFilter'))
  expect(onChange).not.toBeCalled()
})
