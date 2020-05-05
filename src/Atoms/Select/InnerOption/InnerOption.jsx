import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles } from '@material-ui/core'

import FlexBox from '../../../Templates/FlexBox'

const innerOptionStyles = makeStyles(theme => createStyles({
  desc: {
    color: theme.palette.desc.main,
  },
  disabled: {
    color: 'currentColor',
  },
}))

const InnerOption = ({
  children,
  description,
  disabled,
}) => {
  const innerOptionClasses = innerOptionStyles()
  return (
    <FlexBox flexDirection="column" alignItems="flexStart" justifyContent="center" lineHeight={1.5}>
      <FlexBox fontSize="fontSizes.body">{children}</FlexBox>
      <FlexBox fontSize="fontSizes.xs" className={clsx(innerOptionClasses.desc, disabled && innerOptionClasses.disabled)}>{description}</FlexBox>
    </FlexBox>
  )
}

export default InnerOption
