import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog } from '@material-ui/core'
import {
  Button, IconButton, Tooltip, Typo, Trans,
} from '../../Atoms'
import { Close } from 'styled-icons/material/Close'
import { HelpOutline } from 'styled-icons/material/HelpOutline'
import FlexBox from '../FlexBox'

const dialogStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    position:        'absolute',
    top:             0,
    left:            0,
    height:          '100%',
    width:           '100%',
    '& .header':     {
      '& .title': {
        textTransform: 'uppercase',
      },
    },
    '& .pointer': {
      cursor: 'pointer',
    }
  },
}))

const iconStyles = makeStyles({
  root: {
    padding:     0,
    marginRight: -10,
  },
})

const Fullscreen = ({
  icon,
  headerTitle,
  title,
  tooltip,
  onClickTooltip,
  children,
  onCancel,
  onValidate,
  validateText,
  ...props
}) => {
  let tooltipProps = {
    title: tooltip,
  }

  if (onClickTooltip)
    tooltipProps = {
      ...tooltipProps,
      className: 'pointer',
      onClick: onClickTooltip,
    }

  return <Dialog fullScreen classes={dialogStyles()} {...props} hideBackdrop>
    <FlexBox flexDirection="column" gap={4} my={3} mx={8} height="100%" overflow="hidden">
      <FlexBox className="header">
        <FlexBox flexDirection="column" flexGrow={1} justifyContent="center">
          <FlexBox className="title" gap={0.5}>
            {icon}
            <Typo fontSize="xs" fontWeight="title" fontFamily="title">
              {headerTitle}
            </Typo>
          </FlexBox>
          <FlexBox className="subTitle" gap={0.5}>
            <Typo fontSize="l" fontFamily="title">
              {title}
            </Typo>
            {tooltip && <Tooltip { ...tooltipProps }>
              <HelpOutline size={25} />
            </Tooltip>}
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <IconButton onClick={onCancel} role="close" classes={iconStyles()}>
            <Close size={50} />
          </IconButton>
        </FlexBox>
      </FlexBox>
      <FlexBox className="body" flexDirection="column" overflow="auto" height="100%">
        {children}
      </FlexBox>
      <FlexBox justifyContent="flex-end" gap={1} mt={2}>
        <Button color="default" onClick={onCancel}>
          <Trans transKey="global.action.cancel" />
        </Button>
        {!!validateText &&
          <Button color="success" onClick={onValidate}>
            {validateText}
          </Button>
        }
      </FlexBox>
    </FlexBox>
  </Dialog>
}

export default Fullscreen
