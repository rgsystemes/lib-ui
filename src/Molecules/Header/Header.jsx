import React, { useState, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import { ChevronRight, Edit, Save } from '@styled-icons/material'

import Input from '../../Atoms/Input'
import Link from '../../Atoms/Link'
import { useTranslation } from '../../Atoms/Trans'
import Typo from '../../Atoms/Typo'
import FlexBox from '../../Templates/FlexBox'
import BottomTooltipIcon from './BottomTooltipIcon'
import useOnClickOutside from '../../hooks/useOnClickOutside'

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
  const input = useRef()
  const saveButton = useRef()
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

  const handleCancel = (hasError = false) => {
    setEditing(hasError)
    setSaving(false)
    if (!hasError) {
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

    response.then(() => {
      setSaving(false)
      handleValue(value)
    }).catch(() => {
      handleCancel(true)
    })
  }

  useOnClickOutside([input, saveButton], () => handleCancel())

  return (
    <FlexBox flexDirection="column" {...props}>
      <FlexBox alignItems="center">
        <FlexBox flexDirection="column">
          <FlexBox alignItems="center">
            {featurePath ? <Link component={RouterLink} to={featurePath}>
              {feature}
            </Link> : <Typo>
              {feature}
            </Typo>}
            {subFeature && <ChevronRight width={20} />}
            {displayMode && <>
              <Typo>
                {value}
              </Typo>
              {!!onSave && <BottomTooltipIcon role="edit" title={t('global.action.edit')} Component={Edit} onClick={() => setEditing(true)} />}
            </>}
            {!displayMode && <>
              <Input
                value={value}
                autoFocus
                onChange={({ target: { value } }) => setValue(value)}
                onKeyDown={({ key }) => (key === 'Enter' && handleSave()) || (key === 'Escape' && handleCancel())}
                disabled={isSaving}
                ref={input}
              />
            </>}
            {editMode && <BottomTooltipIcon role="save" title={t('global.action.save')} Component={Save} onClick={handleSave} ref={saveButton} />}
            {isSaving && <>
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
