import React from 'react'
import { RadioGroup } from '@material-ui/core'

import Export from '..'
import Radio from '../../../Atoms/Radio'
import FormControl, { FormLabel, FormControlLabel } from '../../../Molecules/FormControl'

const RadioGroupForm = ({
  label,
  value,
  options = [],
  onChange = () => {},
  ...props
}) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">
      {label}
    </FormLabel>
    <RadioGroup
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      {...props}
    >
      {options.map(({ label, value }) =>
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio />}
          label={label}
        />,
      )}
    </RadioGroup>
  </FormControl>
)

export const RadiosExport = ({
  label,
  value,
  options = [],
  onChange = () => {},
  ...props
}) => (
  <Export
    value={value}
    onChange={onChange}
    disabled={!value.data}
    {...props}
  >
    <RadioGroupForm
      label={label}
      value={value.data}
      options={options}
      onChange={data => onChange({ ...value, data })}
    />
  </Export>
)

export default RadiosExport
