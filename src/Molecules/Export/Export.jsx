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

import Formats from './Formats'

const isAllowedFormat = (formats, format) => formats.some(({ value } = {}) => format === value)

const Actions = ({ onClose, onExport, disabled }) => <>
  <Button onClick={onClose} size="small">
    <Trans transKey="global.action.cancel"/>
  </Button>
  <Button color="success" onClick={onExport} size="small" disabled={disabled}>
    <Trans transKey="global.export.actionExport"/>
  </Button>
</>

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
  const onFileNameChange = event => onChange({ filename: event.target.value, format })

  return <>
    <FlexBox flexDirection='column' p={4} gap={2}>
      <FlexBox alignItems='center' mb={2} >
        <Box component={Download} size={20} color="primary.main" />
        <Box component='h2' ml={0.5} my={0} fontSize="fontSizes.title" fontFamily="fontFamily" color="primary.main">
          <Trans transKey="global.export.title" />
        </Box>
      </FlexBox>
      <Typo>{descriptionText}</Typo>
      <FormControl>
        <InputLabel>
          <Trans transKey="global.export.filename" />
          <Input value={filename} onChange={onFileNameChange} />
        </InputLabel>
      </FormControl>
      <Formats formats={formats} value={format} onChange={format => onChange({ filename, format })} />
      {extraOptions}
    </FlexBox>
    <FlexBox justifyContent='space-between' borderColor='grey.100' borderTop={1} py={2} px={4} mt={2} >
      <Actions
        onClose={onClose}
        onExport={onExport}
        disabled={
          !filename === '' ||
          !isAllowedFormat(formats, format) ||
          disabled
        }
      />
    </FlexBox>
  </>
}

export default Export
