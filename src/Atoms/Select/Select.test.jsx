import React, { useState, Children, cloneElement } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'
import { InputLabel } from '@material-ui/core'

import Select from './index'
import Option from './Option'

const SelectWrapper = ({ native, label, children, ...props }) => (
  <>
    <InputLabel id="label" htmlFor="select">{label}</InputLabel>
    <Select native={native} labelId="label" inputProps={{ id: 'select' }} {...props}>
      {children}
    </Select>
  </>
)

const StateHolder = ({ children }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <div data-testid="select" data-value={value} />
      {cloneElement(Children.only(children), { value, onChange: ({ target: { value } }) => setValue(value) })}
    </>
  )
}

it('should update state when native option is selected', () => {
  const { getByLabelText, getByTestId } = render(
    <StateHolder>
      <SelectWrapper native label="native-select">
        <Option value="native-option-value" />
      </SelectWrapper>
    </StateHolder>,
  )

  user.selectOptions(getByLabelText('native-select'), 'native-option-value')

  expect(getByTestId('select')).toHaveAttribute('data-value', 'native-option-value')
})

it('should update state when simple option is selected', async () => {
  const { getByRole, findByText, getByTestId } = render(
    <StateHolder>
      <SelectWrapper label="simple-select" placeholder={false}>
        <Option value="simple-option-value">simple-option-label</Option>
      </SelectWrapper>
    </StateHolder>,
  )

  user.click(getByRole('button', { name: label => label.includes('simple-select') }))
  user.click(await findByText('simple-option-label'))

  expect(getByTestId('select')).toHaveAttribute('data-value', 'simple-option-value')
})
