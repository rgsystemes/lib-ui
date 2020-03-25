import React from 'react'

import BaseCard from '@material-ui/core/Card'

import { FlexBox } from '../../Templates'

const Card = props => <FlexBox
  component={BaseCard}
  gap={2}
  p={2}
  bgcolor="grey.100"
  borderRadius="borderRadius"
  flexDirection="column"
  {...props}
/>

export default Card
