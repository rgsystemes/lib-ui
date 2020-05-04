import React from 'react'

import Trans from '../../../Atoms/Trans'
import FormControl from '../../../Molecules/FormControl'
import InputLabel from '../../../Molecules/FormControl/InputLabel'
import Select from '../../../Atoms/Select'
import Option from '../../../Atoms/Select/Option'

const Formats = ({ formats, value, onChange }) =>
  formats.length > 0 &&
  <FormControl>
    <InputLabel>
      <Trans transKey="global.export.format.label"/>
      <Select value={value} onChange={event => onChange(event.target.value)} native>
        {formats.map(({ value, label }) => <Option value={value} key={value}>{label}</Option>)}
      </Select>
    </InputLabel>
  </FormControl>

export default Formats
