import React, { useState } from 'react'

import { Filter as FilterIcon } from 'styled-icons/boxicons-regular/Filter'
import { Trash } from 'styled-icons/boxicons-solid/Trash'
import { Check } from 'styled-icons/material/Check'
import Divider from '@material-ui/core/Divider'
import Popover from '@material-ui/core/Popover'

import DateRange from '../../Molecules/DateRange'
import Trans, { useTranslation } from '../../Atoms/Trans'
import FormControl, { InputLabel } from '../../Molecules/FormControl'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'
import FlexBox from '../../Templates/FlexBox'
import { EMPTY_VALUES } from './constants'

const Action = props => <FlexBox
  css={{ cursor: 'pointer' }}
  fontSize="fontSize"
  fontFamily="fontFamily"
  component="button"
  alignItems="center"
  border="none"
  color="grey.600"
  bgcolor="white"
  gap={0.5}
  p={1}
  {...props}
/>

const Filter = ({
  type,
  translationKey,
  value,
  ...props
}) => {
  return (
    type === 'date' ? (
      <DateRange
        value={value}
        {...props}
      />
    ) : (
      <FormControl>
        <InputLabel>
          {translationKey}
          <InnerInput
            value={value}
            type={type}
            {...props}
          />
        </InputLabel>
      </FormControl>
    )
  )
}

const InnerInput = ({
  type = 'text',
  onChange,
  value,
  placeholder = '',
  options = [],
  ...props
}) => {
  const t = useTranslation()

  return type === 'select' ? (
    <Select
      onChange={event => onChange(event.target.value)}
      value={value}
      Empty={() => null}
      {...props}
    >
      {options.map(({ value, label }) => <option value={value} key={value}>{t(label)}</option>)}
    </Select>
  ) : (
    <Input
      placeholder={t(placeholder)}
      onChange={event => onChange(event.target.value)}
      value={value}
      {...props}
    />
  )
}

const FilterWrapper = ({
  children,
  onClear: onClearProp = () => {},
  value: valueProp,
  onChange: onChangeProp = () => {},
  ...props
}) => {
  const [value, setValue] = useState(valueProp)
  const [anchorEl, setAnchorEl] = useState(null)
  const onChange = () => {
    setAnchorEl(null)
    value !== valueProp && onChangeProp(value)
  }
  const onClear = (...args) => {
    setAnchorEl(null)
    setValue(EMPTY_VALUES[props.type])
    onClearProp(...args)
  }

  return <>
    <FlexBox
      color="grey.600"
      pb={1}
      css={{ cursor: 'pointer' }}
      aria-label="open filter"
      component={FilterIcon}
      onClick={ev => setAnchorEl(ev.currentTarget)}
      size={16}
    />
    <Popover open={!!anchorEl} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
      <FlexBox
        onKeyPress={ev => ev.key === 'Enter' && onChange()}
        minWidth="200px"
        flexDirection="column"
      >
        <FlexBox p={2} flexDirection="column">
          <Filter value={value} onChange={setValue} {...props}/>
        </FlexBox>
        <Divider />
        <FlexBox gap={1} p={1} justifyContent="space-between">
          <Action onClick={onClear}>
            <Trash size={16} />
            <span><Trans>global.filter.clear</Trans></span>
          </Action>
          <Action onClick={onChange}>
            <Check size={16} />
            <span><Trans>global.filter.applyFilter</Trans></span>
          </Action>
        </FlexBox>
      </FlexBox>
    </Popover>
  </>
}

export default FilterWrapper
