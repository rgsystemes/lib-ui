import React, { useState } from 'react'
import styled from 'styled-components'

const BaseSwitch = ({ className, onChange, checked = false, size = 'medium', ...props }) => {
  const [state, setState] = useState(checked)

  const onClick = (onChange) => () => {
    setState(!state)
    onChange()
  }

  return <div className={`${className} ${size === 'medium' ? '' : size === 'small' ? 'switch-small' : 'switch-smallest'}`} onClick={onClick(onChange)} { ...props }>
    <div className={`switch-group ${state ? 'switch-checked' : ''}`}>
      <label className={'switch-on'}>On</label>
      <label className={'switch-off'}>Off</label>
      <span className={'switch-slider'}/>
    </div>
  </div>
}

const BootstrapSwitchBtn = `
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-image: none;
  color: #333;
  background-color: #fff;
  position: absolute;
  margin: 0;
  top: 0;
  bottom: 0;
`

const StyledSwitch = styled(BaseSwitch)`
  font-family: sans-serif;
  width: 57px;
  height: 32px;
  color: #333;
  background-color: #fff;
  display: inline-block;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid #adadad;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  
  & > .switch-group :not(.switch-checked) {
    left: -100%
  }
  
  & > .switch-group {
    color: #333;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    left: -100%;
    position: absolute;
    width: 200%;
    top: 0;
    bottom: 0;
    left: 0;
    transition: left 0.35s;
    
    & > .switch-on {
      ${BootstrapSwitchBtn}
      background-color: #428bca;
      border-color: #428bca;
      color: #fff;
      left: 0;
      padding-right: 24px;
      right: 50%;
    }
    
    & > .switch-off {
      ${BootstrapSwitchBtn}
      background-color: #e6e6e6;
      border-color: #adadad;
      color: #333;
      left: 50%;
      padding-left: 24px;
      right: 0;
    }
    
    & > .switch-slider {
      ${BootstrapSwitchBtn}
      position: relative;
      margin: 0 auto;
      padding-top: 0px;
      padding-bottom: 0px;
      height: 100%;
      width: 4px;
      border-radius: 4px;
      border-width: 0px 1px;
      border-color: #ccc;
      border-style: solid;
    }
  }
  
  &.switch-small {
    width: 53px;
    height: 28px;
    
    & .switch-on {
      padding-top: 4px;
      padding-left: 11px;
    }
    
    & .switch-off {
      padding-top: 4px;
      padding-left: 23px;
    }
    
    & .switch-slider {
      width: 2px;
      padding: 0px 10px;
    }
  }
  
  &.switch-smallest {
    width: 34px;
    height: 20px;
    font-size: 11px;
    
    & .switch-on {
      padding-top: 2px;
      padding-left: 7px;
    }
    
    & .switch-off {
      padding-top: 2px;
      padding-left: 13px;
    }
    
    & .switch-slider {
      width: 1px;
      padding: 0px 5px;
    }
  }
`

export const Switch = ({ ...props }) => {
  return <StyledSwitch { ...props } />
}

// TODO trim whitespaces
// TODO Prop style
// TODO Prop disabled
// TODO Prop callbacks
// TODO hover lol
// TODO border de la bonne couleur
// TODO text placement
// TODO duplicated css

export default Switch
