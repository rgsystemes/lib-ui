import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Duplicable from './index'
import FlexBox from '../../Templates/FlexBox'
import Input from '../../Atoms/Input'
import ButtonNoBorder from '../../Atoms/ButtonNoBorder'
import { muiRg6Theme } from '../../../.storybook/themes'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { TrashAlt } from 'styled-icons/boxicons-solid/TrashAlt'
import userEvent from '@testing-library/user-event'

it('should show a default input', () => {
  const data = [
    'Input 1 value',
    'Input 2 value',
  ]
  const { getByText, getAllByPlaceholderText, getAllByTitle } = render(
    <MuiThemeProvider theme={muiRg6Theme}>
      <Duplicable
        model={<FlexBox component={Input} placeholder={'contact@email.com'} mb={1} />}
        addType={<FlexBox component={ButtonNoBorder} mt={2}>{'Duplicate input'}</FlexBox>}
        removeType={<FlexBox component={TrashAlt} size={24} cursor="pointer" title="InputRemover" />}
      />,
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

  let removers = getAllByTitle('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Remove the first input
  userEvent.click(removers[0])

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)
  removers = getAllByTitle('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Make sure the old second input, now first input still has its original value
  expect(inputs[0]).toHaveValue(data[1])

  // Try to remove the last input left
  userEvent.click(removers[0])

  // Make sure the last input was not removed
  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)
  expect(getAllByTitle('InputRemover')).toHaveLength(inputs.length)
})

it('should show no input', () => {
  const data = [
    'Input 1 value',
    'Input 2 value',
  ]
  const { getByText, getAllByPlaceholderText, getAllByTitle } = render(
    <MuiThemeProvider theme={muiRg6Theme}>
      <Duplicable
        model={<FlexBox component={Input} placeholder={'contact@email.com'} mb={1} />}
        addType={<FlexBox component={ButtonNoBorder} mt={2}>{'Duplicate input'}</FlexBox>}
        removeType={<FlexBox component={TrashAlt} size={24} cursor="pointer" title="InputRemover" />}
        canBeEmpty={true}
      />,
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

  let removers = getAllByTitle('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Remove the first input
  userEvent.click(removers[0])

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)
  removers = getAllByTitle('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Make sure the old second input, now first input still has its original value
  expect(inputs[0]).toHaveValue(data[1])

  // Remove the last input left
  userEvent.click(removers[0])

  // Make sure the last input was removed
  expect(() => getAllByPlaceholderText('contact@email.com')).toThrow('Unable to find an element with the placeholder text of: contact@email.com')
  expect(() => getAllByTitle('InputRemover')).toThrow('Unable to find an element with the title: InputRemover')
})

it('should show sent input', () => {
  const data = [
    'Input 1 value',
    'Input 2 value',
  ]
  const { getByText, getAllByPlaceholderText, getAllByTitle } = render(
    <MuiThemeProvider theme={muiRg6Theme}>
      <Duplicable
        model={<FlexBox component={Input} placeholder={'contact@email.com'} mb={1} />}
        addType={<FlexBox component={ButtonNoBorder} mt={2}>{'Duplicate input'}</FlexBox>}
        removeType={<FlexBox component={TrashAlt} size={24} cursor="pointer" title="InputRemover" />}
        canBeEmpty={true}
        instancesProps={data.map(datum => ({ value: datum }))}
      />,
    </MuiThemeProvider>,
  )

  const duplicateBtn = getByText('Duplicate input')
  expect(duplicateBtn).toBeVisible()

  let inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(data.length)

  inputs.map((input, index) => expect(input).toHaveValue(data[index]))

  let removers = getAllByTitle('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Remove the first input
  userEvent.click(removers[0])

  inputs = getAllByPlaceholderText('contact@email.com')
  expect(inputs).toHaveLength(1)
  removers = getAllByTitle('InputRemover')
  expect(removers).toHaveLength(inputs.length)

  // Make sure the old second input, now first input still has its original value
  expect(inputs[0]).toHaveValue(data[1])

  // Remove the last input left
  userEvent.click(removers[0])

  // Make sure the last input was removed
  expect(() => getAllByPlaceholderText('contact@email.com')).toThrow('Unable to find an element with the placeholder text of: contact@email.com')
  expect(() => getAllByTitle('InputRemover')).toThrow('Unable to find an element with the title: InputRemover')
})
