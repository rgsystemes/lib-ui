import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import Export from './index'
import FormControl, { FormLabel, FormControlLabel } from '../../Molecules/FormControl'
import Radio from '../../Atoms/Radio'
import { TransProvider, useTranslation } from '../../Atoms/Trans'
import RadioGroup from '@material-ui/core/RadioGroup'

import markdown from './README.md'

export default {
  title: 'Molecules/Export',
}

const exportFormats = [
  { value: 'xls', label: 'Excel' },
  { value: 'xml', label: 'XML' },
  { value: 'json', label: 'JSON' },
  { value: 'csv-comma', label: 'CSV comma-separated' },
  { value: 'csv-semicolon', label: 'CSV semicolon-separated' },
  { value: 'txt', label: 'Text' },
]

const extraOptions = [
  { label: 'extraOptions.redPill', value: 'red' },
  { label: 'extraOptions.bluePill', value: 'blue' },
]

const ExtraOptions = ({ value, onChange }) => {
  const t = useTranslation()
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{t('extraOptions.label')}</FormLabel>
      <RadioGroup
        aria-label="exportScope"
        name="extraOption"
        value={value}
        onChange={event => {
          onChange(event.target.value)
          action('extra option changed')(event.target.value)
        }}
      >
        {extraOptions.map(({ label, value }) =>
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={t(label)}
          />,
        )}
      </RadioGroup>
    </FormControl>
  )
}

const customLocales = {
  en: {
    extraOptions: {
      label:    'Extra option',
      redPill:  'Choose red pill',
      bluePill: 'Choose blue pill',
    },
  },
  fr: {
    extraOptions: {
      label:    'Option supplémentaire',
      redPill:  'Prendre la pilule rouge',
      bluePill: 'prendre la pilule bleue',
    },
  },
}

const Wrapper = ({ ...props }) => {
  const t = useTranslation()
  const lang = t('lang')

  return <TransProvider value={customLocales[lang]} {...props} />
}

export const exportStory = () => {
  const [value, setValue] = useState({ format: '' })

  return (
    <Wrapper>
      <Export
        value={value}
        disabled={value.extraOption == null}
        onChange={newValue => {
          setValue({ ...value, ...newValue })
          action('export value changed')(newValue)
        }}
        onClose={action('export canceled')}
        onExport={action('export launched')}
        formats={exportFormats}
        extraOptions={
          <ExtraOptions
            value={value.extraOption}
            onChange={extraOption => {
              setValue({ ...value, extraOption })
            }}
          />
        }
      />
    </Wrapper>
  )
}

exportStory.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Export.test.jsx'],
  },
}
