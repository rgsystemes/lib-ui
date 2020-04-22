import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Switch from './index'

const StateHolder = ({ children = () => {} }) => {
  const [checked, setChecked] = useState(false)

  return <>
    {checked ? 'Yup' : 'Nope'}
    {children({ checked: checked, onChange: setChecked })}
  </>
}

it('should show label when rendered', () => {
  const { getByText } = render(
    <Switch/>,
  )
  expect(getByText('On')).toBeVisible()
  expect(getByText('Off')).toBeVisible()
})

it('should trigger custom handler when clicked', async () => {
  const { queryByText } = render(
    <StateHolder>
      {({ ...props }) => (
        <Switch {...props} />
      )}
    </StateHolder>,
  )
  expect(queryByText('Nope')).toBeVisible()
  expect(queryByText('Yup')).toBeNull()
  fireEvent.click(queryByText('On'))
  expect(queryByText('Nope')).toBeNull()
  expect(queryByText('Yup')).toBeVisible()
})
