import React, { useState } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormGroup from '@material-ui/core/FormGroup'
import { format } from 'date-fns'
import { Edit } from '@styled-icons/material/Edit'
import { Check } from '@styled-icons/material/Check'
import Box from '@material-ui/core/Box'

import Button from '../../Atoms/Button'
import IconButton from '../../Atoms/IconButton'
import StatusChip from '../../Atoms/StatusChip'
import FormControl, { FormControlLabel } from '../FormControl'
import Editable from './index'
import FlexBox from '../../Templates/FlexBox'
import Select from '../../Atoms/Select'
import Typo from '../../Atoms/Typo'
import Checkbox from '../../Atoms/Checkbox'
import DateTimePicker from '../../Atoms/DateTimePicker'
import Radio from '../../Atoms/Radio'

import markdown from './README.md'

export default {
  title: 'Molecules/Editable',
}

const options = [
  { value: 'choice1', label: 'Choice 1' },
  { value: 'choice2', label: 'Choice 2' },
  { value: 'choice3', label: 'Choice 3' },
  { value: 'choice4', label: 'Choice 4' },
]

const EditableSelect = ({ ...props }) =>
  <Select {...props}>
    {options.map(({ value, label }) =>
      <option value={value}>{label}</option>,
    )}
  </Select>

const EditableCheckboxGroup = ({ checked, onChange, ...props }) =>
  <FormGroup aria-label="checkboxGroup" name="checkboxGroup" {...props}>
    {options.map(({ value, label }) =>
      <FormControlLabel
        control={
          <Checkbox
            value={value}
            checked={checked[value]}
            onChange={(e, checked) => onChange(value, checked)}
          />
        }
        label={label}
      />,
    )}
  </FormGroup>

const EditableRadioGroup = ({ ...props }) =>
  <RadioGroup aria-label="radioGroup" name="radioGroup" {...props}>
    {options.map(({ value, label }) =>
      <FormControlLabel value={value} control={<Radio />} label={label} />,
    )}
  </RadioGroup>

const CustomFormControl = ({
  value = [],
  onChange = () => {},
  ...props
}) => {
  const [first, second] = value

  return <FormControl {...props}>
    <FlexBox gap={1}>
      <EditableSelect value={first} onChange={e => onChange([e.target.value, second])}/>
      <EditableSelect value={second} onChange={e => onChange([first, e.target.value])}/>
    </FlexBox>
  </FormControl>
}

export const groupedEditable = () => {
  const [edit, setEdit] = useState(false)
  const [value, baseSetValue] = useState({
    text:     'Text',
    select:   'choice3',
    date:     new Date(),
    checkbox: { choice4: true },
    custom:   ['choice1', 'choice3'],
  })

  const setValue = newValue => baseSetValue({ ...value, ...newValue })
  const {
    text, select, checkbox, date, custom = [],
  } = value
  const [customFirst, customSecond] = custom

  return (
    <>
      <FlexBox gap={2} flexDirection="column">
        <Editable
          edit={edit}
          value={text}
          label="Label"
          onChange={e => setValue({ ...value, text: e.target.value })}
        >
          <Typo>
            {text}
          </Typo>
        </Editable>
        <Editable
          edit={edit}
          Type={EditableSelect}
          value={select}
          label="Label"
          onChange={e => setValue({ select: e.target.value })}
        >
          <Typo>
            {select}
          </Typo>
        </Editable>
        <Editable
          edit={edit}
          Type={EditableRadioGroup}
          value={select}
          label="Label"
          onChange={e => setValue({ select: e.target.value })}
        >
          <Typo>
            {select}
          </Typo>
        </Editable>
        <Editable
          edit={edit}
          Type={EditableCheckboxGroup}
          checked={checkbox}
          label="Label"
          onChange={(name, value) => setValue({ checkbox: { ...checkbox, [name]: value } })}
        >
          <FlexBox as={Typo} gap={2}>
            {Object
              .entries(checkbox)
              .filter(([name, value]) => !!value)
              .map(([name, value]) =>
                <StatusChip>
                  {name}
                </StatusChip>,
              )
            }
          </FlexBox>
        </Editable>
        <Editable
          edit={edit}
          Type={DateTimePicker}
          value={date}
          label="Label"
          onChange={date => setValue({ date })}
        >
          <Typo>
            {format(date, 'Pp')}
          </Typo>
        </Editable>
        <Editable
          edit={edit}
          FormControl={CustomFormControl}
          label="Label"
          value={custom}
          onChange={custom => setValue({ custom })}
        >
          <Typo>The first value is : {customFirst}</Typo>
          <Typo>The first value is : {customSecond}</Typo>
        </Editable>
      </FlexBox>
      <Box mt={2}>
        <Button onClick={() => setEdit(!edit)}>
          {edit ? 'Submit' : 'Edit'}
        </Button>
      </Box>
    </>
  )
}

groupedEditable.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Editable.test.jsx'],
  },
}

export const standaloneEditable = () => {
  const [value, setValue] = useState('Obi-wan Kenobi')
  const [edit, setEdit] = useState(false)

  return (
    <FlexBox gap={0.5}>
      <Editable
        edit={edit}
        label={false}
        value={value}
        size="small"
        onChange={e => setValue(e.target.value)}
      >
        <Typo onClick={() => setEdit(true)}>
          {value}
        </Typo>
      </Editable>
      <IconButton size="small" onClick={() => setEdit(!edit)}>
        {edit ? <Check size={16}/> : <Edit size={16} />}
      </IconButton>
    </FlexBox>
  )
}

standaloneEditable.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Editable.test.jsx'],
  },
}
