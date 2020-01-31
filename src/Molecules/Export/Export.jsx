import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import RadioGroup from '@material-ui/core/RadioGroup'
import { Download } from 'styled-icons/boxicons-regular/Download'

import Trans, { useTranslation } from '../../Atoms/Trans'
import Radio from '../../Atoms/Radio'
import FormControl, { FormLabel, FormControlLabel } from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'
import Typo from '../../Atoms/Typo'
import Button from '../../Atoms/Button'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  ${css({ px: 'xl' })}
  width: 250px;

  ${FormControl} {
    ${css({ mt: 'xl' })}
  }
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;
  ${css({
    borderTopColor: 'secondary',
    pt:             'l',
    pb:             's',
    px:             'l',
    mt:             'l',
  })}
`

const DownloadIcon = styled(Download)`
  ${css({ mr: 's' })}
`

const Export = (
  {
    descriptionText = <Trans transKey="global.export.description"/>,
    onExport = () => {},
    onClose = () => {},
    extraOptions = [],
    formats = [],
    ...props
  }
) => {
  const t = useTranslation()
  const { defaultName = t('global.export.defaultFilename') } = props
  const [format, setFormat] = useState('')
  const [exportScope, setExportScope] = useState('')
  const [filename, setFilename] = useState(defaultName)

  return <>
    <Body>
      <Typo as="h2" fontSize="l" color="primary">
        <DownloadIcon size={20} />
        <Trans transKey="global.export.title" />
      </Typo>
      <Typo>
        {descriptionText}
      </Typo>
      <FormControl>
        <InputLabel>
          <Trans transKey="global.export.filename" />
        </InputLabel>
        <Input
          inputProps={{
            'data-testid': 'export-filename',
          }}
          value={filename}
          onChange={event => setFilename(event.target.value)}
        />
      </FormControl>
      {
        formats.length > 0 &&
          <FormControl>
            <InputLabel>
              <Trans transKey="global.export.format"/>
            </InputLabel>
            <Select
              inputProps={{
                'data-testid': 'export-format',
              }}
              value={format}
              onChange={event => setFormat(event.target.value)}
            >
              <option value="" disabled>
                {t('global.chooseOption')}
              </option>
              {formats.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
            </Select>
          </FormControl>
      }
      {
        extraOptions.length > 0 &&
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <Trans transKey="global.export.dataToExportLabel"/>
            </FormLabel>
            <RadioGroup
              aria-label="exportScope"
              name="exportScope"
              value={exportScope}
              onChange={event => setExportScope(event.target.value)}
            >
              {extraOptions.map(({ label, value }) =>
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio inputProps={{ 'data-testid': `export-extra-option-${value}` }}/>}
                  label={label}
                />
              )}
            </RadioGroup>
          </FormControl>
      }
    </Body>
    <Actions>
      <Button onClick={onClose}>
        <Trans transKey="global.cancel"/>
      </Button>
      <Button
        color="success"
        data-testid="export-button"
        onClick={() => onExport(filename, format, exportScope)}
        disabled={
          filename === '' ||
          (formats.length > 0 && format == null) ||
          (extraOptions.length > 0 && exportScope == null)
        }
      >
        <Trans transKey="global.export.actionExport"/>
      </Button>
    </Actions>
  </>
}

export default Export
