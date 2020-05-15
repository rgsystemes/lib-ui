import React, { useState } from 'react'

import ActionCard from './index'

import markdown from './README.md'
import Editable from '../Editable'
import { FormControlLabel } from '../FormControl'
import Checkbox from '../../Atoms/Checkbox'
import FlexBox from '../../Templates/FlexBox'
import Trans from '../../Atoms/Trans'
import Input from '../../Atoms/Input'

import FormGroup from '@material-ui/core/FormGroup'
import { text } from '@storybook/addon-knobs'
import { Times } from 'styled-icons/fa-solid/Times'
import { Check } from 'styled-icons/material/Check'
import { Edit } from 'styled-icons/material/Edit'

Input.defaultProps = {
  autoFocus: false,
}

export default {
  title: 'Molecules/ActionCard',
}

const originalValue = {
  textOne:  'Input value #1',
  textTwo:  'Input value #2',
  checkbox: { option1: true },
}

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
      Type={Input}
      edit={edit}
      value={textOne}
      label={text('label', 'Label')}
      placeholder={text('placeholder', 'Placeholder')}
      onChange={e => onChange({ ...value, textOne: e.target.value })}
      labelSize="body"
      descriptionSize="fontSize"
      descriptionFontFamily="fontFamily"
    />
    <Editable
      Type={Input}
      edit={edit}
      value={textTwo}
      label={text('label', 'Label')}
      placeholder={text('placeholder', 'Placeholder')}
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
  onCancel,
  onEdit,
  onSave,
}) => edit ? (
  <>
    <FlexBox onClick={onCancel}>
      <Times size={16} />
      <FlexBox marginLeft={0.5}><Trans>global.action.cancel</Trans></FlexBox>
    </FlexBox>
    <FlexBox onClick={onSave}>
      <Check size={16} />
      <FlexBox marginLeft={0.5}><Trans>global.action.save</Trans></FlexBox>
    </FlexBox>
  </>
) : (
  <FlexBox onClick={onEdit}>
    <Edit size={16} />
    <FlexBox marginLeft={0.5}><Trans>global.action.edit</Trans></FlexBox>
  </FlexBox>
)

export const actionCard = () => {
  const [edit, setEdit] = useState(false)
  const [original, setOriginal] = useState(originalValue)
  const [current, baseSetCurrent] = useState(originalValue)

  const setCurrent = newValue => baseSetCurrent({ ...current, ...newValue })
  const onCancel = () => {
    setCurrent(original)
    setEdit(false)
  }

  const onEdit = () => {
    setEdit(true)
  }

  const onSave = () => {
    setOriginal(current)
    setEdit(false)
  }

  const actions = <Actions
    edit={edit}
    onCancel={onCancel}
    onEdit={onEdit}
    onSave={onSave}
  />

  return (
    <ActionCard
      title={text('title', 'This is the card title')}
      description={text('description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum nisi quis varius sollicitudin. Duis tincidunt nec velit pretium dictum. Aliquam non facilisis lacus. Sed eget tincidunt sapien.')}
      actions={actions}
    >
      <EditableList edit={edit} value={current} onChange={setCurrent} />
    </ActionCard>
  )
}

actionCard.story = {
  parameters: {
    notes: { markdown },
  },
}
