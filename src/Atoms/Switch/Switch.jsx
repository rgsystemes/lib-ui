import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import classNames from 'classnames'

const variants = {
  primary: {
    background: 'primary',
    color: 'secondary',
    hover: '#00859a',
    borderColor: 'primary',
    disabled: {
      background: '#59bfce',
      color: '#c5e9ee',
    },
  },
  success: {
    background: 'success',
    color: 'secondary',
    hover: '#449d44',
    borderColor: 'success',
    disabled: {
      background: '#95d195',
      color: '#daefda',
    },
  },
  default: {
    background: 'default',
    color: 'text',
    hover: '#e6e6e6',
    borderColor: '#7a7a7a',
    disabled: {
      background: 'default',
      color: '#7a7a7a',
    },
  },
}

const BaseSwitch = ({ className, disabled = false, onChange = () => {}, checked = false, size = 'medium', color = 'primary', ...props }) => {
  const [state, setState] = useState(checked)

  const onClick = () => {
    if (disabled)
      return

    const newState = !state
    setState(newState)
    onChange({
      target: {
        checked: newState
      }
    })
  }

  const classes = classNames(className, {
    disabled: disabled,
    'switch-small': size === 'small',
    'switch-smallest': size === 'smallest',
    'switch-checked': state,
  })

  return <div className={classes} onClick={onClick} { ...props }>
    <div className={'switch-group'}>
      <label className={'switch-on button'}>On</label>
      <label className={'switch-off button'}>Off</label>
      <span className={'switch-slider button'} />
    </div>
  </div>
}

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
  
  & .button {
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
  }
  
  &.switch-checked {
    ${({ color, disabled }) => {
      const variant = variants[color] || variants.primary
      return css({
        borderColor: disabled ? variant.disabled.background : variant.borderColor,
      })
    }};
  }
  
  & :not(.switch-checked) > .switch-group {
    left: -100%;
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
      ${({ color, disabled }) => {
        const variant = variants[color] || variants.primary
        return css({
          backgroundColor: disabled ? variant.disabled.background : variant.background,
          color: disabled ? variant.disabled.color : variant.color,
        })
      }};
      left: 0;
      padding-right: 24px;
      right: 50%;
    }
    
    & > .switch-on:hover {
      ${({ color, disabled }) => {
        if (disabled)
          return
  
        const variant = variants[color] || variants.primary
        return css({
          backgroundColor: variant.hover,
        })
      }};
    }
    
    & > .switch-off {
      ${({ disabled }) => {
        return css({
          backgroundColor: disabled ? '#efefef' : '#e6e6e6',
          color: disabled ? '#747474' : '#333',
        })
      }};
      left: 50%;
      padding-left: 24px;
      right: 0;
    }
    
    & > .switch-off:hover {
      ${({ disabled }) => {
        if (disabled)
          return
      
        return css({
          backgroundColor: '#dddddd',
        })
      }};
    }
    
    & > .switch-slider {
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
  
  &.disabled {
    cursor: not-allowed;
    
    * {
      cursor: not-allowed;
    }
  }
`

export const Switch = ({ ...props }) => {
  return <StyledSwitch { ...props } />
}

// TODO utiliser makestyles (à confirmer) makeStyles(theme => createStyles({
// TODO utiliser large au lieu de smallest?

export default Switch
