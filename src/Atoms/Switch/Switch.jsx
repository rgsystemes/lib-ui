import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  const variants = {
    primary: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      hover: theme.palette.primary.dark,
      borderColor: theme.palette.primary.main,
      disabled: {
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      },
    },
    success: {
      background: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      hover: theme.palette.success.dark,
      borderColor: theme.palette.success.main,
      disabled: {
        background: theme.palette.success.light,
        color: theme.palette.success.contrastText,
      },
    },
    default: {
      background: 'white',
      color: 'black',
      hover: '#e6e6e6',
      borderColor: '#ccc',
      disabled: {
        background: 'white',
        color: '#7a7a7a',
      },
    },
  }

  return {
    root: {
      fontFamily: 'sans-serif',
      width: '53px',
      height: '28px',
      display: 'inline-block',
      marginBottom: 0,
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      cursor: 'pointer',
      border: '1px solid #ccc',
      borderRadius: '4px',
      position: 'relative',
      overflow: 'hidden',
      '& .button': {
        display: 'inline-block',
        padding: '4px 11px',
        marginBottom: 0,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'absolute',
        margin: 0,
        top: 0,
      },
      '&:not(.switch-checked) .switch-group': {
        left: '-100%',
      },
      '&:not(.disabled):hover': {
        borderColor: '#a4a4a4',
      },
      '& > .switch-group': {
        textAlign: 'center',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        position: 'absolute',
        width: '200%',
        top: 0,
        bottom: 0,
        left: 0,
        transition: 'left 0.35s',
        '& > .switch-on': {
          left: 0,
          paddingRight: '24px',
          right: '50%',
        },
        '& > .switch-off': {
          left: '50%',
          paddingLeft: '23px',
          right: 0,
          backgroundColor: '#e6e6e6',
        },
        '& > .switch-slider': {
          backgroundColor: '#fff',
          position: 'relative',
          margin: '0 auto',
          width: '2px',
          padding: '0px 10px',
          height: '100%',
          borderRadius: '4px',
          borderWidth: '0px 1px',
          borderColor: '#ccc',
          borderStyle: 'solid',
        },
      },
      // Sizes
      '&.switch-large': {
        width: '57px',
        height: '31px',
        '& > .switch-group': {
          '& .switch-on': {
            paddingTop: '6px',
            paddingLeft: '12px',
          },
          '& .switch-off': {
            paddingTop: '6px',
            paddingLeft: '24px',
          },
          '& .switch-slider': {
            paddingTop: '0px',
            paddingBottom: '0px',
            width: '4px',
          },
        },
      },
      '&.switch-small': {
        width: '34px',
        height: '20px',
        fontSize: '11px',
        '& > .switch-group': {
          '& .switch-on': {
            paddingTop: '2px',
            paddingLeft: '7px',
          },
          '& .switch-off': {
            paddingTop: '2px',
            paddingLeft: '12px',
          },
          '& .switch-slider': {
            width: '1px',
            padding: '0px 5px',
          },
        },
      },
      // Disabled
      '&.disabled': {
        borderColor: '#dedede',
        cursor: 'not-allowed',
        '& *': {
          cursor: 'not-allowed',
        },
        '& > .switch-group': {
          '& > .switch-off': {
            backgroundColor: '#efefef',
            color: '#747474',
          },
        },
      },
      // Color stuff
      '&.switch-color-primary': {
        '&.switch-checked': {
          borderColor: variants.primary.borderColor,
        },
        '& .switch-on': {
          backgroundColor: variants.primary.background,
          color: variants.primary.color,
        },
        '&:not(.disabled) .switch-on:hover': {
          backgroundColor: variants.primary.hover,
          borderColor: variants.primary.hover,
        },
        '&.disabled': {
          '&.switch-checked': {
            borderColor: variants.primary.disabled.background,
          },
          '& .switch-on': {
            backgroundColor: variants.primary.disabled.background,
            color: variants.primary.disabled.color,
          }
        },
      },
      '&.switch-color-success': {
        '&.switch-checked': {
          borderColor: variants.success.borderColor,
        },
        '& .switch-on': {
          backgroundColor: variants.success.background,
          color: variants.success.color,
        },
        '&:not(.disabled) .switch-on:hover': {
          backgroundColor: variants.success.hover,
          borderColor: variants.success.hover,
        },
        '&.disabled': {
          '&.switch-checked': {
            borderColor: variants.success.disabled.background,
          },
          '& .switch-on': {
            backgroundColor: variants.success.disabled.background,
            color: variants.success.disabled.color,
          }
        },
      },
      '&.switch-color-default': {
        '&.switch-checked': {
          borderColor: variants.default.borderColor,
        },
        '& .switch-on': {
          backgroundColor: variants.default.background,
          color: variants.default.color,
        },
        '&:not(.disabled) .switch-on:hover': {
          backgroundColor: variants.default.hover,
          borderColor: variants.default.hover,
        },
        '&.disabled': {
          '&.switch-checked': {
            borderColor: variants.default.borderColor,
          },
          '& .switch-on': {
            backgroundColor: variants.default.disabled.background,
            color: variants.default.disabled.color,
          }
        },
      },
    },
  }
})

export const Switch = ({ className, disabled = false, onChange = () => {}, checked = false, size = 'medium', color = 'primary', ...props }) => {
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

  const classes = clsx(className, `switch-${size}`, `switch-color-${color}`, useStyles().root, {
    disabled: disabled,
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

export default Switch
