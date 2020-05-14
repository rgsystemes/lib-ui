import React from 'react'
import { text } from '@storybook/addon-knobs'

import Duplicable from './Duplicable'
import Input from '../../Atoms/Input'
import FlexBox from '../../Templates/FlexBox'
import ButtonNoBorder from '../../Atoms/ButtonNoBorder'
import { TrashAlt } from 'styled-icons/boxicons-solid/TrashAlt'

import markdown from './README.md'

export default {
  title: 'Molecules/Duplicable',
}

export const emptyDuplicable = () => {
  return <Duplicable
    model={<Input placeholder={text('email_placeholder', 'contact@email.com')} />}
    addType={<ButtonNoBorder>{text('add_btn_text', 'Duplicate input')}</ButtonNoBorder>}
    removeType={<FlexBox component={TrashAlt} size={24} cursor="pointer" />}
  />
}

emptyDuplicable.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Duplicable.test.jsx'],
  },
}

export const emptyableDuplicable = () => {
  return <Duplicable
    model={<Input placeholder={text('email_placeholder', 'contact@email.com')} />}
    addType={<ButtonNoBorder>{text('add_btn_text', 'Duplicate input')}</ButtonNoBorder>}
    removeType={<FlexBox component={TrashAlt} size={24} cursor="pointer" />}
    canBeEmpty={true}
  />
}

emptyableDuplicable.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Duplicable.test.jsx'],
  },
}

export const duplicableWithData = () => {
  return <Duplicable
    model={<Input placeholder={text('email_placeholder', 'contact@email.com')} />}
    addType={<ButtonNoBorder>{text('add_btn_text', 'Duplicate input')}</ButtonNoBorder>}
    removeType={<FlexBox component={TrashAlt} size={24} cursor="pointer" />}
    instancesProps={[{ value: 'toto' }, { value: 'tata' }]}
  />
}

duplicableWithData.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Duplicable.test.jsx'],
  },
}
