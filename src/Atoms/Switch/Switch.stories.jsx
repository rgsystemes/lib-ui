import React from 'react'
import Switch from './index'
import markdown from './README.md'

export default {
  title: 'Atoms/Switch',
}

const colors = ['primary', 'success', 'default']
const sizes = ['medium', 'small', 'smallest']

export const switchAtom = () => (
  <>
    {sizes.map(size => {
      return <>
        {colors.map(color => {
          return <>
            <Switch checked={true} color={color} size={size}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </>
        })}
        <Switch checked={false} size={size}/>
        <br/><br/>
      </>
    })}
    {colors.map(color => {
      return <>
        <Switch checked={true} color={color} disabled={true}/>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </>
    })}
    <Switch checked={false} disabled={true}/>
  </>
)

switchAtom.story = {
  parameters: {
    notes: { markdown },
  },
}