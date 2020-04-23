import React, { useState, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Typography, CircularProgress } from '@material-ui/core'
import { Edit, Save } from '@styled-icons/material'

import Input from '../../Atoms/Input'
import Link from '../../Atoms/Link'
import { useTranslation } from '../../Atoms/Trans'
import FlexBox from '../../Templates/FlexBox'
import BottomTooltipIcon from './BottomTooltipIcon'

const Header = ({
  children,
  feature = '',
  featurePath = null,
  subFeature = '',
  onChange = () => {},
  onSave = false,
  status = null,
  actions = null,
  ...props
}) => {
  const saveButton = useRef(null)
  const [isEditing, setEditing] = useState(false)
  const [isSaving, setSaving] = useState(false)
  const [value, setValue] = useState(subFeature)

  const t = useTranslation()
  const displayMode = !isEditing && !isSaving
  const editMode = isEditing && !isSaving

  const handleValue = value => {
    setValue(value)
    onChange(value)
  }
  const handleCancel = (catched = false) => {
    setEditing(catched)
    setSaving(false)
    if (!catched) {
      handleValue(subFeature)
    }
  }
  const handleSave = () => {
    setEditing(false)
    setSaving(true)

    let response = typeof onSave === 'function' ? onSave(value) : onSave

    if (!(response instanceof Promise)) {
      response = response ? Promise.resolve() : Promise.reject(new Error(JSON.stringify(response)))
    }

    response.then(() => handleValue(value) || setSaving(false)).catch(handleCancel.bind(null, true))
  }

  return (
    <FlexBox flexDirection="column" {...props}>
      <FlexBox alignItems="center">
        <FlexBox flexDirection="column">
          <FlexBox alignItems="center">
            {featurePath ? <Link component={RouterLink} to={featurePath}>
              {feature}
            </Link> : <Typography>
              {feature}
            </Typography>}
            {subFeature && <Typography>&nbsp;>&nbsp;</Typography>}
            {displayMode && <>
              <Typography>
                {value}
              </Typography>
              {!!onSave && <BottomTooltipIcon role="edit" title={t('global.action.edit')} Component={Edit} onClick={() => setEditing(true)} />}
            </>}
            {editMode && <>
              <Input
                value={value}
                autoFocus
                onChange={({ target: { value } }) => setValue(value)}
                onBlur={({ relatedTarget }) => relatedTarget !== saveButton.current && !(relatedTarget instanceof Document) && handleCancel()}
                onKeyDown={({ key }) => (key === 'Enter' && handleSave()) || (key === 'Escape' && handleCancel())}
              />
              <BottomTooltipIcon role="save" title={t('global.action.save')} Component={Save} onClick={handleSave} ref={saveButton} />
            </>}
            {isSaving && <>
              <Input value={value} disabled />
              <FlexBox padding={1.5}>
                <CircularProgress color="primary" size={16} />
              </FlexBox>
            </>}
          </FlexBox>
          <FlexBox>
            {status}
          </FlexBox>
        </FlexBox>
        <FlexBox flexGrow={1}></FlexBox>
        <FlexBox>
          {actions}
        </FlexBox>
      </FlexBox>
      {children}
    </FlexBox>
  )
}

export default Header
