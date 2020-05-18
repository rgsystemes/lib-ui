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

const Model = ({ onRemove, key, value }) => <FlexBox alignItems="center" mb={1} gap={1} key={key}>
  <Input placeholder={text('email_placeholder', 'contact@email.com')} value={value} />
  <FlexBox component={TrashAlt} size={24} cursor="pointer" onClick={onRemove}/>
</FlexBox>

export const emptyDuplicable = () => {
  return <Duplicable
    model={<Model />}
    addType={
      ({ onAdd }) => <FlexBox key="add_btn" mt={2}>
        <ButtonNoBorder onClick={onAdd}>{text('add_btn_text', 'Duplicate input')}</ButtonNoBorder>
      </FlexBox>
    }
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
    model={<Model />}
    addType={
      ({ onAdd }) => <FlexBox key="add_btn" mt={2}>
        <ButtonNoBorder onClick={onAdd}>{text('add_btn_text', 'Duplicate input')}</ButtonNoBorder>
      </FlexBox>
    }
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
    model={<Model />}
    addType={
      ({ onAdd }) => <FlexBox key="add_btn" mt={2}>
        <ButtonNoBorder onClick={onAdd}>{text('add_btn_text', 'Duplicate input')}</ButtonNoBorder>
      </FlexBox>
    }
    instancesProps={[{ value: 'toto' }, { value: 'tata' }]}
  />
}

duplicableWithData.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Duplicable.test.jsx'],
  },
}
