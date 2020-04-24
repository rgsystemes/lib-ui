// TODO translations
// TODO fix anim
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Fade } from '@material-ui/core'
import { Button, IconButton, Tooltip, Typo } from '../../Atoms'
import { X } from 'styled-icons/feather/X'
import { Question } from '@styled-icons/evil/Question'
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
  icon, headerTitle, title, tooltip, children, open, setOpen, onValidate, validateText, ...props
}) => {
  const handleClose = () => {
    setOpen(false)
  }

  const handleValidate = () => {
    onValidate()
    handleClose()
  }

  return <Modal className={useStyles().root} open={open} {...props} hideBackdrop closeAfterTransition>
    <Fade in={open}>
      <>
        <div className={'header'}>
          <FlexBox className={'title'}>
            {icon}
            <Typo fontSize="xs" fontWeight="title" fontFamily="title">{headerTitle}</Typo>
          </FlexBox>
          <FlexBox className={'subTitle'}>
            <Typo fontSize="l" fontFamily="title">{title}</Typo>
            {tooltip &&
              <Tooltip title={tooltip}>
                <Question size={25} />
              </Tooltip>
            }
          </FlexBox>
        </div>
        <div className={'body'}>
          {children}
        </div>
        <IconButton className={'close'} onClick={handleClose}>
          <X size={50} />
        </IconButton>
        <div className={'buttons'}>
          <Button color={'default'} onClick={handleClose}>Nope</Button>
          {!!validateText &&
            <Button color={'success'} onClick={handleValidate}>{validateText}</Button>
          }
        </div>
      </>
    </Fade>
  </Modal>
}

export default Fullscreen
