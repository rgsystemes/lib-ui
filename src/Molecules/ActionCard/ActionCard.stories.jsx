import React, { useState } from 'react'

import ActionCard from './index'

import markdown from './README.md'
import Editable from '../Editable'
import { FormControlLabel } from '../FormControl'
import Checkbox from '../../Atoms/Checkbox'
import FlexBox from '../../Templates/FlexBox'
import Trans from '../../Atoms/Trans'

import FormGroup from '@material-ui/core/FormGroup'
import { text } from '@storybook/addon-knobs'
import { Times } from '@styled-icons/fa-solid/Times'
import { Check } from 'styled-icons/material/Check'
import { Edit } from 'styled-icons/material/Edit'

export default {
  title: 'Molecules/ActionCard',
}

let originalValue

const options = [
  { value: 'option1', label: 'First option' },
  { value: 'option2', label: 'Second option' },
  { value: 'option3', label: 'Third option' },
  { value: 'option4', label: 'Last option' },
]

const EditableList = ({ edit, value, onChange }) => {
  const {
    textOne,
    textTwo,
    checkbox,
  } = value

  return <FlexBox gap={3} mb={0} flexDirection="column" fontSize="body">
    <Editable
      edit={edit}
      value={textOne}
      label={text('label', 'Label')}
      onChange={e => onChange({ ...value, textOne: e.target.value })}
      labelSize="body"
      descriptionSize="fontSize"
      descriptionFontFamily="fontFamily"
    />
    <Editable
      edit={edit}
      value={textTwo}
      label={text('label', 'Label')}
      onChange={e => onChange({ ...value, textTwo: e.target.value })}
      labelSize="body"
      descriptionSize="fontSize"
      descriptionFontFamily="fontFamily"
    />
    <Editable
      edit={edit}
      Type={FormGroup}
      value={checkbox}
      label={text('label', 'Label')}
      labelSize="body"
      descriptionSize="fontSize"
      descriptionFontFamily="fontFamily"
    >
      {options.map(({ value, label }) =>
        <FormControlLabel
          control={
            <Checkbox
              value={value}
              checked={checkbox[value]}
              onChange={(e, checked) => onChange({ checkbox: { ...checkbox, [value]: checked } })}
            />
          }
          label={label}
          key={`checkbox ${value}`}
        />,
      )}
    </Editable>
  </FlexBox>
}

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

export const actionCard = () => {
  const [edit, setEdit] = useState(false)
  const [value, baseSetValue] = useState({
    textOne:  'Input value #1',
    textTwo:  'Input value #2',
    checkbox: { option1: true },
  })

  const setValue = newValue => baseSetValue({ ...value, ...newValue })
  const actions = <Actions
    edit={edit}
    onEdit={setEdit}
    value={value}
    onChange={setValue}
  />

  return (
    <ActionCard
      title={text('title', 'This is the card title')}
      description={text('description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum nisi quis varius sollicitudin. Duis tincidunt nec velit pretium dictum. Aliquam non facilisis lacus. Sed eget tincidunt sapien.')}
      actions={actions}
    >
      <EditableList edit={edit} value={value} onChange={setValue} />
    </ActionCard>
  )
}

actionCard.story = {
  parameters: {
    notes: { markdown },
  },
}
