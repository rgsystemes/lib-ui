import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import Icon from '../../Atoms/Icon'
import { Trash } from 'styled-icons/boxicons-solid/Trash'
import DateRange from '../../Molecules/DateRange'
import Trans, { useTranslation } from '../../Atoms/Trans'
import FormControl, { InputLabel } from '../../Molecules/FormControl'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'
import Typo from '../../Atoms/Typo'
import FlexBox from '../../Templates/FlexBox'

const Clear = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid lightgrey;
  ${css({ mt: 'm', px: 'l', py: 'm' })};
`

const Filter = ({
  type,
  translationKey,
  onChange: onChangeProp = () => {},
  value: valueProp,
  ...props
}) => {
  const [value, setValue] = useState(valueProp)
  const onChange = () => value !== valueProp && onChangeProp(value)

  if (type === 'date') {
    return <DateRange
      value={value}
      onChange={setValue}
      onBlur={() => onChange(value)}
      {...props}
    />
  }

  return <FormControl>
    <InputLabel>
      {translationKey}
      <InnerInput
        value={value}
        onChange={setValue}
        onBlur={() => onChange(value)}
        type={type}
        {...props}
      />
    </InputLabel>
  </FormControl>
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
      {options.map(({ value, label }) => <option value={value}>{t(label)}</option>)}
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

const FilterWrapper = ({ children, onClear, ...props }) =>
  <FlexBox minWidth="200px" flexDirection="column" px={2} py={1}>
    <Filter {...props}/>
    <Clear onClick={onClear}>
      <Icon Component={Trash} size="small"/>
      <Typo color="gray">
        <Trans>global.action.remove</Trans>
      </Typo>
    </Clear>
  </FlexBox>

export default FilterWrapper
