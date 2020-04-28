import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'
import { Button, IconButton, Tooltip, Typo, Trans } from '../../Atoms'
import { X } from 'styled-icons/feather/X'
import { Question } from '@styled-icons/evil/Question'
import FlexBox from '../FlexBox'
import { useTranslation } from '../../Atoms/Trans'

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
  icon, headerTitle, title, tooltip, children, open, setOpen, onValidate, validateText, ...props
}) => {
  const handleClose = () => {
    setOpen(false)
  }

  const handleValidate = () => {
    onValidate()
    handleClose()
  }

  const t = useTranslation()
  const transKeyCancel = 'global.action.cancel'

  return <Modal className={useStyles().root} open={open} {...props} hideBackdrop closeAfterTransition>
    <>
      <div className={'header'}>
        <FlexBox className={'title'}>
          {icon}
          <Typo fontSize="xs" fontWeight="title" fontFamily="title">{headerTitle}</Typo>
        </FlexBox>
        <FlexBox className={'subTitle'}>
          <Typo fontSize="l" fontFamily="title">{title}</Typo>
          {tooltip &&
            <Tooltip title={tooltip} data-testid={'tooltip'}>
              <Question size={25} />
            </Tooltip>
          }
        </FlexBox>
      </div>
      <div className={'body'}>
        {children}
      </div>
      <IconButton className={'close'} onClick={handleClose} title={t(transKeyCancel)}>
        <X size={50} />
      </IconButton>
      <div className={'buttons'}>
        <Button color={'default'} onClick={handleClose}>
          <Trans transKey={transKeyCancel} />
        </Button>
        {!!validateText &&
          <Button color={'success'} onClick={handleValidate}>{validateText}</Button>
        }
      </div>
    </>
  </Modal>
}

export default Fullscreen
