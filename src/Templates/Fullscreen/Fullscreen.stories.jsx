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
  const [state, setState] = useState(false)
  const [stateNoValidate, setStateNoValidate] = useState(false)
  const props = {
    icon:        icon,
    headerTitle: 'Header title',
    title:       'Page title',
    tooltip:     'Super tooltip!',
    onValidate:  action('validated!'),
  }

  return (
    <>
      <Button color={'default'} onClick={() => { setState(true) }}>Show</Button>
      <Fullscreen
        { ...props }
        open={state}
        setOpen={setState}
        validateText={'I accept'}
      >
        <span className={'lol'}>My cool content!</span>
        <div>Wow!</div>
      </Fullscreen>
      <br/><br/>
      <Button color={'default'} onClick={() => { setStateNoValidate(true) }}>Show without validate</Button>
      <Fullscreen
        { ...props }
        open={stateNoValidate}
        setOpen={setStateNoValidate}
      >
        <span className={'lol'}>My cool content!</span>
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
