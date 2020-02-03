import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { Download } from 'styled-icons/boxicons-regular/Download'

import Trans, { useTranslation } from '../../Atoms/Trans'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'
import Input from '../../Atoms/Input'
import Typo from '../../Atoms/Typo'
import Button from '../../Atoms/Button'

import Formats from './Formats'

const isAllowedFormat = (formats, format) => formats.some(({ value } = {}) => format === value)

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

const Export = ({
  descriptionText = <Trans transKey="global.export.description"/>,
  onExport = () => {},
  value = {},
  onChange = () => {},
  onClose = () => {},
  extraOptions = null,
  formats = [],
  disabled = false,
  ...props
}) => {
  const t = useTranslation()
  const { defaultName = t('global.export.defaultFilename') } = props
  const { format = '', filename = defaultName } = value

  return <>
    <Body>
      <Typo as="h2" fontSize="l" color="primary">
        <DownloadIcon size={20} />
        <Trans transKey="global.export.title" />
      </Typo>
      <Typo>{descriptionText}</Typo>
      <FormControl>
        <InputLabel>
          <Trans transKey="global.export.filename" />
        </InputLabel>
        <Input
          inputProps={{
            'data-testid': 'export-filename',
          }}
          value={filename}
          onChange={event => onChange({ filename: event.target.value, format })}
        />
      </FormControl>
      <Formats formats={formats} value={format} onChange={format => onChange({ filename, format })} />
      {extraOptions}
    </Body>
    <Actions>
      <Button onClick={onClose}>
        <Trans transKey="global.cancel"/>
      </Button>
      <Button
        color="success"
        data-testid="export-button"
        onClick={onExport}
        disabled={
          filename === '' ||
          !isAllowedFormat(formats, format) ||
          disabled
        }
      >
        <Trans transKey="global.export.actionExport"/>
      </Button>
    </Actions>
  </>
}

export default Export
