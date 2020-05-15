import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ChevronRight } from 'styled-icons/material'

import Link from '../../Atoms/Link'
import FlexBox from '../../Templates/FlexBox'
import HeaderTypo from './HeaderTypo'
import InputSaveProgress from './InputSaveProgress'

const Header = ({
  isEditing = false,
  isLoading = false,
  feature = '',
  featurePath = null,
  subFeature = '',
  onEdit = () => {},
  onCancel = () => {},
  onSubmit = false,
  status = null,
  actions = null,
  ...props
}) => {
  const [value, setValue] = useState(subFeature)

  return (
    <FlexBox flexDirection="column" {...props}>
      <FlexBox alignItems="center">
        <FlexBox flexDirection="column">
          <FlexBox alignItems="center">
            <HeaderTypo>
              {featurePath ? <Link component={RouterLink} to={featurePath}>
                {feature}
              </Link> : feature}
            </HeaderTypo>
            {subFeature && <ChevronRight width={20} />}
            {onSubmit ? <InputSaveProgress
              value={value}
              isEditing={isEditing}
              isLoading={isLoading}
              onEdit={onEdit}
              onChange={setValue}
              onSubmit={onSubmit}
              onBlur={() => setValue(subFeature) || onCancel()}
            /> : <HeaderTypo>
              {value}
            </HeaderTypo>}
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
