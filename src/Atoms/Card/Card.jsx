import React from 'react'

import BaseCard from '@material-ui/core/Card'

import { FlexBox } from '../../Templates'

const Card = ({
  children,
  ...props
}) => (
  <FlexBox gap={2} component={BaseCard} {...props} bgcolor="grey.100" p={2} borderRadius="borderRadius" flexDirection="column">
    {children}
  </FlexBox>
)

export default Card
