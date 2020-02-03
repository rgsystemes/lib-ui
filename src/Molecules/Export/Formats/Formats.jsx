import React from 'react'

import Trans, { useTranslation } from '../../../Atoms/Trans'
import FormControl from '../../../Molecules/FormControl'
import InputLabel from '../../../Molecules/FormControl/InputLabel'
import Select from '../../../Atoms/Select'

const Formats = ({ formats, value, onChange }) => {
  const t = useTranslation()

  return formats.length > 0 &&
    <FormControl>
      <InputLabel htmlFor="export-format">
        <Trans transKey="global.export.format"/>
      </InputLabel>
      <Select
        id="export-format"
        name="export-format"
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option value="" disabled data-testid={`export-format-${value}`}>
          {t('global.chooseOption')}
        </option>
        {formats.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
      </Select>
    </FormControl>
}

export default Formats
