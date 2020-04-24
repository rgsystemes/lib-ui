import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Edit, Check } from '@styled-icons/material'

import { useTranslation } from '../../../Atoms/Trans'
import Editable from '../../Editable'
import FlexBox from '../../../Templates/FlexBox'
import BottomTooltipIcon from '../BottomTooltipIcon'
import HeaderTypo from '../HeaderTypo'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

const editableStyles = makeStyles({
  root: {
    marginTop: '0 !important', // FIXME: refacto input styles
  },
})

const InputSaveProgress = ({
  value,
  isEditing = true,
  isLoading = false,
  onEdit = () => {},
  onBlur = () => {},
  onSubmit = () => {},
  onChange = () => {},
  ...props
}) => {
  const t = useTranslation()
  const ref = useOnClickOutside(() => !isLoading && onBlur())
  const editableClasses = editableStyles()

  return (
    <div ref={ref}>
      <FlexBox alignItems="center">
        <Editable
          classes={editableClasses}
          value={value}
          edit={isEditing}
          label={false}
          size="small"
          onChange={({ target: { value } }) => onChange(value)}
          onKeyDown={({ key }) => (key === 'Enter' && onSubmit(value)) || (key === 'Escape' && onBlur())}
          disabled={isLoading}
          Description={() => <HeaderTypo>
            {value}
          </HeaderTypo>}
          {...props}
        />
        {
          isLoading ? (
            <FlexBox padding={1.5}>
              <CircularProgress color="primary" size={16} />
            </FlexBox>
          ) : isEditing ? (
            <BottomTooltipIcon role="save" title={t('global.action.save')} Component={Check} onClick={() => onSubmit(value)} />
          ) : <BottomTooltipIcon role="edit" title={t('global.action.edit')} Component={Edit} onClick={onEdit} />
        }
      </FlexBox>
    </div>
  )
}

export default InputSaveProgress
