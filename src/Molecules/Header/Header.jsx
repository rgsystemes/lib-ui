import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import { ChevronRight, Edit, Check } from '@styled-icons/material'

import Input from '../../Atoms/Input'
import Link from '../../Atoms/Link'
import { useTranslation } from '../../Atoms/Trans'
import Typo from '../../Atoms/Typo'
import FlexBox from '../../Templates/FlexBox'
import BottomTooltipIcon from './BottomTooltipIcon'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const HeaderTypo = ({ ...props }) => <Typo fontSize="header" fontFamily="title" {...props} />

const Header = ({
  feature = '',
  featurePath = null,
  subFeature = '',
  onChange = () => {},
  onSave = false,
  status = null,
  actions = null,
  ...props
}) => {
  const ref = useOnClickOutside(() => !isSaving && handleCancel())
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

  return (
    <FlexBox flexDirection="column" {...props}>
      <FlexBox alignItems="center">
        <FlexBox flexDirection="column">
          <FlexBox alignItems="center">
            <HeaderTypo>
              {featurePath ? <Link component={RouterLink} to={featurePath}>
                {feature}
              </Link> :
              feature
              }
            </HeaderTypo>
            {subFeature && <ChevronRight width={20} />}
            {displayMode && <>
              <HeaderTypo>
                {value}
              </HeaderTypo>
              {!!onSave && <BottomTooltipIcon role="edit" title={t('global.action.edit')} Component={Edit} onClick={() => setEditing(true)} />}
            </>}
            <div ref={ref}>
              {!displayMode && <>
                <Input
                  value={value}
                  autoFocus
                  onChange={({ target: { value } }) => setValue(value)}
                  onKeyDown={({ key }) => (key === 'Enter' && handleSave()) || (key === 'Escape' && handleCancel())}
                  disabled={isSaving}
                />
              </>}
              {editMode && <BottomTooltipIcon role="save" title={t('global.action.save')} Component={Check} onClick={handleSave} />}
            </div>
            {isSaving && <FlexBox padding={1.5}>
              <CircularProgress color="primary" size={16} />
            </FlexBox>}
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
    </FlexBox>
  )
}

export default Header
