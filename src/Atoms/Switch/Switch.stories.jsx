import React from 'react'
import Switch from './index'
import markdown from './README.md'

export default {
  title: 'Atoms/Switch',
}

export const switchAtom = () => (
  <>
    <Switch/>
    <hr/>
    <Switch size={'medium'}/>
    <br/><br/>
    <Switch size={'medium'} checked={true}/>
    <br/><br/>
    <Switch size={'small'}/>
    <br/><br/>
    <Switch size={'small'} checked={true}/>
    <br/><br/>
    <Switch size={'smallest'}/>
    <br/><br/>
    <Switch size={'smallest'} checked={true}/>
    <hr/>
    <Switch checked={true}/>
    <br/><br/>
    <Switch checked={false}/>
  </>
)

switchAtom.story = {
  parameters: {
    notes: { markdown },
  },
}