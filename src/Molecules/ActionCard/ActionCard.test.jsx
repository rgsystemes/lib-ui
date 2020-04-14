import React, { useState } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ActionCard from './index'
import Editable from '../Editable'
import FlexBox from '../../Templates/FlexBox'

import { text } from '@storybook/addon-knobs'
import userEvent from '@testing-library/user-event'
import { Times } from '@styled-icons/fa-solid/Times'
import { Check } from 'styled-icons/material/Check'
import { Edit } from 'styled-icons/material/Edit'
import Trans from '../../Atoms/Trans'

const title = 'This is a title'
const description = 'This is a description'
const label = 'label'
const inputValue = 'Text #1'
const updatedInputValue = 'Updated #1 text'
const cancelBtn = 'global.action.cancel'
const editBtn = 'global.action.edit'
const saveBtn = 'global.action.save'

let originalValue

const Actions = ({
  edit,
  onEdit,
  value,
  onChange,
}) => {
  const onCancelClick = () => {
    onChange(originalValue)
    onEdit(false)
  }

  const onEditClick = () => {
    originalValue = value
    onEdit(true)
  }

  const onSaveClick = () => {
    onEdit(false)
  }

  return edit ? (
    <>
      <FlexBox onClick={onCancelClick}>
        <Times size={16} />
        <FlexBox marginLeft={0.5}><Trans>global.action.cancel</Trans></FlexBox>
      </FlexBox>
      <FlexBox onClick={onSaveClick}>
        <Check size={16} />
        <FlexBox marginLeft={0.5}><Trans>global.action.save</Trans></FlexBox>
      </FlexBox>
    </>
  ) : (
    <FlexBox onClick={onEditClick}>
      <Edit size={16} />
      <FlexBox marginLeft={0.5}><Trans>global.action.edit</Trans></FlexBox>
    </FlexBox>
  )
}

const ActionCardWrapper = () => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState('Text #1')
  const actions = <Actions
    edit={edit}
    onEdit={setEdit}
    value={value}
    onChange={setValue}
  />

  return (
    <ActionCard
      description={description}
      title={title}
      actions={actions}
    >
      <Editable
        edit={edit}
        value={value}
        label={text('label', label)}
        onChange={e => setValue(e.target.value)}
        labelSize="body"
        descriptionSize="fontSize"
        descriptionFontFamily="fontFamily"
      />
    </ActionCard>
  )
}

const doTheMagicTrick = async ({
  actionBtn,
  expectedInputValue,
}) => {
  const { getByLabelText, getByText } = render(<ActionCardWrapper />)

  expect(getByText(title)).toBeVisible()
  expect(getByText(description)).toBeVisible()
  expect(getByText(label)).toBeVisible()
  expect(getByText(inputValue)).toBeVisible()
  expect(getByText(editBtn)).toBeVisible()

  userEvent.click(getByText(editBtn))

  expect(getByText(saveBtn)).toBeVisible()
  expect(getByText(cancelBtn)).toBeVisible()

  expect(getByLabelText(label)).toBeVisible()
  expect(getByLabelText(label)).toHaveValue(inputValue)
  await userEvent.type(getByLabelText(label), updatedInputValue, { allAtOnce: true })

  userEvent.click(getByText(actionBtn))
  expect(getByText(expectedInputValue)).toBeVisible()
}

it('should cancel the changes', () => {
  doTheMagicTrick({
    actionBtn:          cancelBtn,
    expectedInputValue: inputValue,
  })
})

it('should save the changes', () => {
  doTheMagicTrick({
    actionBtn:          saveBtn,
    expectedInputValue: updatedInputValue,
  })
})
