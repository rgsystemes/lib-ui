import React from 'react'

import Divider from '@material-ui/core/Divider'

import { FlexBox } from '../../Templates'

const Layout = ({
  height = '500px',
  leftChildren,
  rightChildren,
  leftWidth,
  rightWidth,
  ...props
}) => <div>
  <FlexBox height={height} gap={2}>
    <FlexBox
      pr={5}
      flexDirection="column"
      width={leftWidth}
      overflow="auto"
      gap={2}
      overflowWrap="anywhere"
      {...props}
    >
      {leftChildren}
    </FlexBox>
    <Divider orientation="vertical" mx={2}/>
    <FlexBox
      ml={5}
      flexDirection="column"
      width={rightWidth}
      overflow="auto"
      gap={2}
      {...props}
    >
      {rightChildren}
    </FlexBox>
  </FlexBox>
</div>

export default Layout
