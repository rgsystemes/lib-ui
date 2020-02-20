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
  ${css({
    px: 'xl',
    pt: 'xl',
  })}
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;
  ${css({
    borderTopColor: 'secondary',
    py:             'l',
    px:             'xl',
    mt:             'l',
  })}
`

const DownloadIcon = styled(Download)`
  ${css({ mr: 's', color: 'primary' })}
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${css({ mb: 'l' })}
`

const TitleTypo = styled(Typo)`
  ${css({ my: 0 })}
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
      <Title>
        <DownloadIcon size={20} color="primary"/>
        <TitleTypo as="h2" fontSize="title" fontFamily="title" color="primary">
          <Trans transKey="global.export.title" />
        </TitleTypo>
      </Title>
      <Typo>{descriptionText}</Typo>
      <FormControl>
        <InputLabel>
          <Trans transKey="global.export.filename" />
          <Input
            value={filename}
            onChange={event => onChange({ filename: event.target.value, format })}
          />
        </InputLabel>
      </FormControl>
      <Formats formats={formats} value={format} onChange={format => onChange({ filename, format })} />
      {extraOptions}
    </Body>
    <Actions>
      <Button onClick={onClose} size="small">
        <Trans transKey="global.action.cancel"/>
      </Button>
      <Button
        color="success"
        onClick={onExport}
        size="small"
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
