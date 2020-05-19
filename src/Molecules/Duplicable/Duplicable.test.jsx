import React, { useState, useContext, createContext } from 'react'

import Duplicable from './index'
import Input from '../../Atoms/Input'
import { muiRg6Theme } from '../../../.storybook/themes'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import userEvent from '@testing-library/user-event'
import { text } from '@storybook/addon-knobs'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const Context = createContext({})

const Provider = ({ state = {}, children }) => {
  const [data, setData] = useState(state)

  return <Context.Provider value={[data, setData]}>{children}</Context.Provider>
}

const Model = ({ index }) => {
  const [data, setData] = useContext(Context)

  return <Input
    placeholder={text('email_placeholder', 'contact@email.com')}
    value={data[index]}
    onChange={e => setData({
      ...data,
      [index]: e.target.value,
    })}
  />
}

const Wrapper = props => {
  const [, setData] = useContext(Context)

  return <Duplicable
    {...props}
    onRemove={index => setData(({ [index]:_, ...data }) => data)}
    trashTitle="InputRemover"
  />
}

it('should show a default input', () => {
  const data = [
    'Input 1 value',
    'Input 2 value',
  ]
  const { getByText, getAllByPlaceholderText, getAllByTestId } = render(
    <MuiThemeProvider theme={muiRg6Theme}>
      <Provider>
        <Wrapper
          Model={Model}
          addText={text('add_btn_text', 'Duplicate input')}
          requireContent
        />
      </Provider>
    </MuiThemeProvider>,
  )

  const duplicateBtn = getByText('Duplicate input')
  expect(duplicateBtn).toBeVisible()

  expect(getAllByPlaceholderText('contact@email.com')).toHaveLength(1)

  userEvent.click(duplicateBtn)

  let inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(2)

  inputs.map((input, index) => {
    expect(input).toHaveValue('')
    userEvent.type(input, data[index])
  })

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(2)

  inputs.map((input, index) => {
    expect(input).toHaveValue(data[index])
  })

  const removers = getAllByTestId('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Remove the first input
  userEvent.click(removers[0])

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)
  expect(() => getAllByTestId('InputRemover')).toThrow('Unable to find an element by: [data-testid="InputRemover"]')

  // Make sure the old second input, now first input still has its original value
  expect(inputs[0]).toHaveValue(data[1])
})

it('should show no input', () => {
  const data = [
    'Input 1 value',
    'Input 2 value',
  ]
  const { getByText, getAllByPlaceholderText, getAllByTestId } = render(
    <MuiThemeProvider theme={muiRg6Theme}>
      <Provider>
        <Wrapper
          Model={Model}
          addText={text('add_btn_text', 'Duplicate input')}
        />
      </Provider>
    </MuiThemeProvider>,
  )

  const duplicateBtn = getByText('Duplicate input')
  expect(duplicateBtn).toBeVisible()

  expect(() => getAllByPlaceholderText('contact@email.com')).toThrow('Unable to find an element with the placeholder text of: contact@email.com')

  userEvent.click(duplicateBtn)

  let inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)

  userEvent.click(duplicateBtn)
  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(2)

  inputs.map((input, index) => {
    expect(input).toHaveValue('')
    userEvent.type(input, data[index])
  })

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(2)

  inputs.map((input, index) => {
    expect(input).toHaveValue(data[index])
  })

  let removers = getAllByTestId('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Remove the first input
  userEvent.click(removers[0])

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)
  removers = getAllByTestId('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Make sure the old second input, now first input still has its original value
  expect(inputs[0]).toHaveValue(data[1])

  // Remove the last input left
  userEvent.click(removers[0])

  // Make sure the last input was removed
  expect(() => getAllByPlaceholderText('contact@email.com')).toThrow('Unable to find an element with the placeholder text of: contact@email.com')
  expect(() => getAllByTestId('InputRemover')).toThrow('Unable to find an element by: [data-testid="InputRemover"]')
})

it('should show sent input', () => {
  const data = [
    'Input 1 value',
    'Input 2 value',
  ]
  const { getByText, getAllByPlaceholderText, getAllByTestId } = render(
    <MuiThemeProvider theme={muiRg6Theme}>
      <Provider state={{
        0: 'Input 1 value',
        1: 'Input 2 value',
      }}>
        <Wrapper
          Model={Model}
          addText={text('add_btn_text', 'Duplicate input')}
          instancesCount={2}
        />
      </Provider>
    </MuiThemeProvider>,
  )

  const duplicateBtn = getByText('Duplicate input')
  expect(duplicateBtn).toBeVisible()

  let inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(data.length)

  inputs.map((input, index) => expect(input).toHaveValue(data[index]))

  let removers = getAllByTestId('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Remove the first input
  userEvent.click(removers[0])

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)
  removers = getAllByTestId('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Make sure the old second input, now first input still has its original value
  expect(inputs[0]).toHaveValue(data[1])

  // Remove the last input left
  userEvent.click(removers[0])

  // Make sure the last input was removed
  expect(() => getAllByPlaceholderText('contact@email.com')).toThrow('Unable to find an element with the placeholder text of: contact@email.com')
  expect(() => getAllByTestId('InputRemover')).toThrow('Unable to find an element by: [data-testid="InputRemover"]')
})
