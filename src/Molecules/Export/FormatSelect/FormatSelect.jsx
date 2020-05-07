import React from 'react'

import Trans from '../../../Atoms/Trans'
import FormControl from '../../../Molecules/FormControl'
import InputLabel from '../../../Molecules/FormControl/InputLabel'
import Select, { Option } from '../../../Atoms/Select'

export const formats = ['xls', 'xml', 'json', 'csv-comma', 'csv-semicolon', 'txt']

const FormatSelect = ({
  formats,
  value,
  onChange,
}) =>
  formats.length > 0 &&
  <FormControl component="fieldset">
    <InputLabel>
      <Trans transKey="global.export.format" />
      <Select value={value} onChange={event => onChange(event.target.value)} placeholder={false}>
        {formats.map(format => <Option value={format} key={format}>
          <Trans transKey={`global.export.formats.${format}`} />
        </Option>)}
      </Select>
    </InputLabel>
  </FormControl>

export default FormatSelect
