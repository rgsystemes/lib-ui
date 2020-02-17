import React, { useState } from 'react'

import DateRange from '../../Molecules/DateRange'
import { Trans, useTranslation } from '../../Atoms'
import FormControl, { InputLabel } from '../../Molecules/FormControl'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'

const Filter = ({
  type,
  translationKey,
  onChange = () => {},
  value: valueProp,
  ...props
}) => {
  const [value, setValue] = useState(valueProp)

  if (type === 'date') {
    return <DateRange
      value={value}
      onChange={value => {
        setValue(value)
        onChange(value)
      }}
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

export default Filter
