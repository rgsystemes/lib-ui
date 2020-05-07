import React from 'react'

import { Download } from 'styled-icons/boxicons-regular/Download'
import Box from '@material-ui/core/Box'

import Trans, { useTranslation } from '../../Atoms/Trans'
import FormControl from '../../Molecules/FormControl'
import InputLabel from '../../Molecules/FormControl/InputLabel'
import Input from '../../Atoms/Input'
import Typo from '../../Atoms/Typo'
import Button from '../../Atoms/Button'
import FlexBox from '../../Templates/FlexBox'

import FormatSelect, { formats as defaultFormats } from './FormatSelect'

const isAllowedFormat = (formats, format) => formats.some(value => format === value)

const Actions = ({ onClose, onExport, disabled }) => <>
  <Button onClick={onClose} size="small">
    <Trans transKey="global.action.cancel"/>
  </Button>
  <Button color="success" onClick={onExport} size="small" disabled={disabled}>
    <Trans transKey="global.export.actionExport"/>
  </Button>
</>

const Export = ({
  children = null,
  descriptionText = <Trans transKey="global.export.description" />,
  value = {},
  onExport = () => {},
  onChange = () => {},
  onClose = () => {},
  formats = defaultFormats,
  disabled = false,
}) => {
  const t = useTranslation()
  const { format, filename } = value = Object.assign({
    filename: t('global.export.defaultFilename'),
    format:   'xls',
  }, value)
  const onFileNameChange = event => onChange({ filename: event.target.value, format })

  return <>
    <FlexBox flexDirection="column" p={4} gap={2}>
      <FlexBox alignItems="center" mb={2}>
        <Box component={Download} size={20} color="primary.main" />
        <Box component="h2" ml={0.5} my={0} fontSize="fontSizes.title" fontFamily="fontFamily" color="primary.main">
          <Trans transKey="global.export.title" />
        </Box>
      </FlexBox>
      <Typo>{descriptionText}</Typo>
      <FormControl component="fieldset">
        <InputLabel>
          <Trans transKey="global.export.filename" />
          <Input value={filename} onChange={onFileNameChange} />
        </InputLabel>
      </FormControl>
      <FormatSelect formats={formats} value={format} onChange={format => onChange({ filename, format })} />
      {children}
    </FlexBox>
    <FlexBox justifyContent="space-between" borderColor="grey.100" borderTop={1} py={2} px={4}>
      <Actions
        onClose={onClose}
        onExport={() => onExport(value)}
        disabled={!filename || !isAllowedFormat(formats, format) || disabled}
      />
    </FlexBox>
  </>
}

export default Export
