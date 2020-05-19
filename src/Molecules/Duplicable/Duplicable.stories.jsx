import React, { useState, useContext, createContext } from 'react'
import { text } from '@storybook/addon-knobs'

import Duplicable from './Duplicable'
import Input from '../../Atoms/Input'

import markdown from './README.md'

export default {
  title: 'Molecules/Duplicable',
}

const Context = createContext({})

const Provider = ({ state = {}, children }) => {
  const [data, setData] = useState(state)

  return <Context.Provider value={[data, setData]}>{children}</Context.Provider>
}

const Model = ({ index }) => {
  const [data, setData] = useContext(Context)

  return <Input
    placeholder={text('email_placeholder', 'contact@email.com')}
    value={data[index]}
    onChange={e => setData({
      ...data,
      [index]: e.target.value,
    })}
  />
}

const Wrapper = props => {
  const [, setData] = useContext(Context)

  return <Duplicable {...props} onRemove={index => setData(({ [index]:_, ...data }) => data)}/>
}

export const emptyDuplicable = () => <Provider>
  <Wrapper
    Model={Model}
    addText={text('add_btn_text', 'Duplicate input')}
    requireContent
  />
</Provider>

emptyDuplicable.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Duplicable.test.jsx'],
  },
}

export const emptyableDuplicable = () => <Provider>
  <Wrapper
    Model={Model}
    addText={text('add_btn_text', 'Duplicate input')}
  />
</Provider>

emptyableDuplicable.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Duplicable.test.jsx'],
  },
}

export const duplicableWithData = () => {
  return <Provider state={{
    0: 'toto',
    1: 'tata',
  }}>
    <Wrapper
      Model={Model}
      addText={text('add_btn_text', 'Duplicate input')}
      requireContent
      instancesCount={2}
    />
  </Provider>
}

duplicableWithData.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Duplicable.test.jsx'],
  },
}
