import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { Check } from '@styled-icons/material'

import Input from '../../../Atoms/Input'
import { useTranslation } from '../../../Atoms/Trans'
import FlexBox from '../../../Templates/FlexBox'
import BottomTooltipIcon from '../BottomTooltipIcon'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

const InputSaveProgress = ({
  value,
  isEditing = true,
  isSaving = false,
  onChange = () => {},
  onSubmit = () => {},
  onBlur = () => {},
}) => {
  const t = useTranslation()
  const ref = useOnClickOutside(() => !isSaving && onBlur())

  return (
    <div ref={ref}>
      <FlexBox>
        <Input
          value={value}
          autoFocus
          onChange={({ target: { value } }) => onChange(value)}
          onKeyDown={({ key }) => (key === 'Enter' && onSubmit()) || (key === 'Escape' && onBlur())}
          disabled={isSaving}
        />
        {
          isEditing ? (
            <BottomTooltipIcon role="save" title={t('global.action.save')} Component={Check} onClick={onSubmit} />
          ) : isSaving ? (
            <FlexBox padding={1.5}>
              <CircularProgress color="primary" size={16} />
            </FlexBox>
          ) : undefined
        }
      </FlexBox>
    </div>
  )
}

export default InputSaveProgress
