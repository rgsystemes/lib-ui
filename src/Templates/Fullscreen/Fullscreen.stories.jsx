import React, { useState } from 'react'
import Fullscreen from './index'
import { Heart } from 'styled-icons/feather/Heart'
import { action } from '@storybook/addon-actions'
import Button from '../../Atoms/Button'
import markdown from './README.md'

export default {
  title: 'Templates/Fullscreen',
}

const icon = <Heart size={20} />

export const fullscreen = () => {
  const [open, setOpen] = useState(false)
  const [stripped, setStripped] = useState(false)

  const onValidateAction = action('validated')
  const onCancelAction = action('cancelled')

  const onClick = () => {
    setStripped(false)
    setOpen(true)
  }

  const onClickStripped = () => {
    setStripped(true)
    setOpen(true)
  }

  const onCancel = () => {
    setOpen(false)
    onCancelAction()
  }

  const onValidate = () => {
    setOpen(false)
    onValidateAction()
  }

  let props = {
    open:        open,
    icon:        icon,
    headerTitle: 'Header title',
    title:       'Page title',
    onCancel,
    onValidate,
  }

  if (!stripped) {
    props = {
      tooltip:      'Super tooltip!',
      validateText: 'I accept',
      ...props,
    }
  }

  return (
    <>
      <Button color="default" onClick={onClick}>Show</Button>
      <br/><br/>
      <Button color="default" onClick={onClickStripped}>Show without validate & tooltip</Button>
      <Fullscreen
        { ...props }
      >
        <span className="lol">My cool content!</span>
        <div>Wow!</div>
      </Fullscreen>
    </>
  )
}

fullscreen.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Fullscreen.test.jsx'],
  },
}
