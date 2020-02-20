import React from 'react'

import Trans, { useTranslation } from '../../../Atoms/Trans'
import FormControl from '../../../Molecules/FormControl'
import InputLabel from '../../../Molecules/FormControl/InputLabel'
import Select from '../../../Atoms/Select'

const Formats = ({ formats, value, onChange }) => {
  const t = useTranslation()

  return formats.length > 0 &&
    <FormControl>
      <InputLabel>
        <Trans transKey="global.export.format.label"/>
        <Select value={value} onChange={event => onChange(event.target.value)}>
          {formats.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
        </Select>
      </InputLabel>
    </FormControl>
}

export default Formats
