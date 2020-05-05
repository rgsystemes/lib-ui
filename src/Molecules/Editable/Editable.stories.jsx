import React, { useState } from 'react'
import { Box, RadioGroup, FormGroup } from '@material-ui/core'
import { Edit } from '@styled-icons/material/Edit'
import { Check } from '@styled-icons/material/Check'

import Button from '../../Atoms/Button'
import IconButton from '../../Atoms/IconButton'
import FormControl, { FormControlLabel, InputLabel } from '../FormControl'
import Editable from './index'
import FlexBox from '../../Templates/FlexBox'
import Select, { Option } from '../../Atoms/Select'
import Typo from '../../Atoms/Typo'
import Checkbox from '../../Atoms/Checkbox'
import DateRange from '../../Molecules/DateRange'
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

const CustomFormControl = ({
  value = [],
  onChange = () => {},
  ...props
}) => {
  const [first, second] = value

  return <FormControl {...props}>
    <InputLabel>
      Label
      <FlexBox gap={1}>
        <Select value={first} onChange={e => onChange([e.target.value, second])} native>
          {options.map(({ value, label }) =>
            <Option key={value} value={value}>{label}</Option>,
          )}
        </Select>
        <Select value={second} onChange={e => onChange([first, e.target.value])} native>
          {options.map(({ value, label }) =>
            <Option key={value} value={value}>{label}</Option>,
          )}
        </Select>
      </FlexBox>
    </InputLabel>
  </FormControl>
}

export const groupedEditable = () => {
  const [edit, setEdit] = useState(false)
  const [value, baseSetValue] = useState({
    text:     'Text',
    select:   'choice3',
    date:     { start: new Date(), end: new Date() },
    checkbox: { choice4: true },
    custom:   ['choice1', 'choice3'],
  })

  const setValue = newValue => baseSetValue({ ...value, ...newValue })
  const {
    text,
    select,
    checkbox,
    date,
    custom = [],
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
        />
        <Editable
          edit={edit}
          Type={Select}
          value={select}
          label="Label"
          onChange={e => setValue({ select: e.target.value })}
          native
        >
          {options.map(({ value, label }) =>
            <Option key={value} value={value}>{label}</Option>,
          )}
        </Editable>
        <Editable
          edit={edit}
          Type={RadioGroup}
          value={select}
          label="Label"
          onChange={e => setValue({ select: e.target.value })}
        >
          {options.map(({ value, label }) =>
            <FormControlLabel key={value} value={value} control={<Radio />} label={label} />,
          )}
        </Editable>
        <Editable
          edit={edit}
          Type={FormGroup}
          value={checkbox}
          label="Label"
        >
          {options.map(({ value, label }) =>
            <FormControlLabel
              key={value}
              control={
                <Checkbox
                  value={value}
                  checked={checkbox[value]}
                  onChange={(e, checked) => setValue({ checkbox: { ...checkbox, [value]: checked } })}
                />
              }
              label={label}
            />,
          )}
        </Editable>
        <Editable
          edit={edit}
          Type={DateRange}
          startLabel={null}
          endLabel={null}
          value={date}
          label="Label"
          onChange={date => setValue({ date })}
        />
        <Editable
          edit={edit}
          FormControl={CustomFormControl}
          label="Label"
          value={custom}
          onChange={custom => setValue({ custom })}
          Description={() =>
            <>
              <Typo>The first value is : {customFirst}</Typo>
              <Typo>The second value is : {customSecond}</Typo>
            </>
          }
        />
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
