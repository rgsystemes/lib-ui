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

const Container = styled.div`
  min-width: 200px;
  .MuiFormControl-root {
    ${css({ px: 'l', py: 'm' })};
  }
`

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
      variant="static"
      {...props}
    />
  }

  return <FormControl>
    <InputLabel>
      <Trans>
        {translationKey}
      </Trans>
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
    <Select onChange={event => onChange(event.target.value)} value={value} {...props}>
      <option value="0">
        {t('global.chooseOption')}
      </option>
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
  <Container>
    <Filter {...props}/>
    <Clear onClick={onClear}>
      <Icon Component={Trash} size="small"/>
      <Typo color="gray">
        <Trans>global.remove</Trans>
      </Typo>
    </Clear>
  </Container>

export default FilterWrapper
