import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

const variants = {
  primary: {
    background: 'primary',
    color: 'secondary'
  },
  success: {
    background: 'success',
    color: 'secondary'
  },
  default: {
    background: 'default',
    color: 'text'
  },
  grey: {
    background: 'lightgray',
    color: 'text'
  },
}

const BaseSwitch = ({ className, onChange = () => {}, checked = false, size = 'medium', color = 'primary', ...props }) => {
  const [state, setState] = useState(checked)

  const onClick = (onChange) => () => {
    const newState = !state
    setState(newState)
    onChange({
      target: {
        checked: newState
      }
    })
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
  cursor: pointer;
  user-select: none;
  position: absolute;
  margin: 0;
  top: 0;
`

const StyledSwitch = styled(BaseSwitch)`
  font-family: sans-serif;
  width: 57px;
  height: 32px;
  display: inline-block;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid #adadad;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  
  & > .switch-group :not(.switch-checked) {
    left: -100%
  }
  
  & > .switch-group {
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    position: absolute;
    width: 200%;
    top: 0;
    bottom: 0;
    left: 0;
    transition: left 0.35s;
    
    & > .switch-on {
      ${BootstrapSwitchBtn}
      ${({ color }) => {
        const variant = variants[color] || variants.primary
        return css({
          backgroundColor: variant.background,
          color: variant.color,
        })
      }};
      left: 0;
      padding-right: 24px;
      right: 50%;
    }
    
    & > .switch-off {
      ${BootstrapSwitchBtn}
      background-color: #e6e6e6;
      color: #333;
      left: 50%;
      padding-left: 24px;
      right: 0;
    }
    
    & > .switch-slider {
      ${BootstrapSwitchBtn}
      background-color: #fff;
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
      padding-left: 12px;
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
// TODO Prop disabled
// TODO hover lol
// TODO border de la bonne couleur
// TODO utiliser large au lieu de smallest?

export default Switch
