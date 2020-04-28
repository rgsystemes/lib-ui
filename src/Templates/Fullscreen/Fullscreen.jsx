import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog } from '@material-ui/core'
import {
  Button, IconButton, Tooltip, Typo, Trans,
} from '../../Atoms'
import { Close } from 'styled-icons/material/Close'
import { HelpOutline } from '@styled-icons/material/HelpOutline'
import FlexBox from '../FlexBox'

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: 'white',
      position:        'absolute',
      top:             0,
      left:            0,
      height:          '100%',
      width:           '100%',
      '& .close':      {
        position: 'absolute',
        top:      10,
        right:    80,
      },
      '& .buttons': {
        position: 'absolute',
        bottom:   47,
        right:    80,
        '& > *':  {
          marginLeft: 7,
        },
      },
      '& .title': {
        textTransform: 'uppercase',
        '& span':      {
          marginLeft: 4,
        },
      },
      '& .header, .body': {
        marginLeft: 67,
        marginTop:  22,
      },
      '& .subTitle > *': {
        marginLeft: 3,
      },
      '&.hidden': {
        visibility: 'hidden',
      },
    },
  }
})

const Fullscreen = ({
  icon,
  headerTitle,
  title,
  tooltip,
  children,
  onCancel,
  onValidate,
  validateText,
  ...props
}) => {
  const transKeyCancel = 'global.action.cancel'

  return <Dialog fullScreen className={useStyles().root} {...props} hideBackdrop>
    <div className="header">
      <FlexBox className="title">
        {icon}
        <Typo fontSize="xs" fontWeight="title" fontFamily="title">{headerTitle}</Typo>
      </FlexBox>
      <FlexBox className="subTitle">
        <Typo fontSize="l" fontFamily="title">{title}</Typo>
        {tooltip &&
          <Tooltip title={tooltip} data-testid="tooltip">
            <HelpOutline size={25} />
          </Tooltip>
        }
      </FlexBox>
    </div>
    <div className="body">
      {children}
    </div>
    <IconButton className="close" onClick={onCancel} role="close">
      <Close size={50} />
    </IconButton>
    <div className="buttons">
      <Button color="default" onClick={onCancel}>
        <Trans transKey={transKeyCancel} />
      </Button>
      {!!validateText &&
        <Button color="success" onClick={onValidate}>{validateText}</Button>
      }
    </div>
  </Dialog>
}

export default Fullscreen
