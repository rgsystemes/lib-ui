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
    <Switch color={'secondary'} checked={true}/>
    <Switch color={'success'} checked={true}/>
    <Switch color={'default'} checked={true}/>
    <Switch color={'grey'} checked={true}/>
    <hr/>
    <Switch checked={true}/>
    <br/><br/>
    <Switch checked={false}/>
    <hr/>
    <Switch onChange={(props) => {console.log(props)}}/> // todo find a cool method
  </>
)

switchAtom.story = {
  parameters: {
    notes: { markdown },
  },
}