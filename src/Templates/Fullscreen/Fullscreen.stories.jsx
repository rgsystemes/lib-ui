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
  const onClickAction = action('clicked')

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
    onClickTooltip: onClickAction,
    open:           open,
    icon:           icon,
    headerTitle:    'Header title',
    title:          'Page title',
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
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
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
