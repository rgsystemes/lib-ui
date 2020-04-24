import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ChevronRight, Edit } from '@styled-icons/material'

import Link from '../../Atoms/Link'
import { useTranslation } from '../../Atoms/Trans'
import Typo from '../../Atoms/Typo'
import FlexBox from '../../Templates/FlexBox'
import BottomTooltipIcon from './BottomTooltipIcon'
import InputSaveProgress from './InputSaveProgress'

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
  const [isEditing, setEditing] = useState(false)
  const [isSaving, setSaving] = useState(false)
  const [value, setValue] = useState(subFeature)

  const t = useTranslation()
  const displayMode = !isEditing && !isSaving

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
            {displayMode ? <>
              <HeaderTypo>
                {value}
              </HeaderTypo>
              {!!onSave && <BottomTooltipIcon role="edit" title={t('global.action.edit')} Component={Edit} onClick={() => setEditing(true)} />}
            </> : <InputSaveProgress
              value={value}
              isEditing={isEditing}
              isSaving={isSaving}
              onChange={setValue}
              onSubmit={handleSave}
              onBlur={handleCancel}
            />}
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
