import React from 'react'

import FlexBox from '../../../Templates/FlexBox'

const InnerOption = ({ children, description }) => (
  <FlexBox flexDirection="column" alignItems="flexStart" justifyContent="center" lineHeight={1.5}>
    <FlexBox fontSize="fontSizes.body">{children}</FlexBox>
    <FlexBox fontSize="fontSizes.xs" color="desc.main">{description}</FlexBox>
  </FlexBox>
)

export default InnerOption
