import React, { useState } from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

const variants = {
  primary: {
    background: '#009cb4',
    color: '#f5f5f5',
    hover: '#00859a',
    borderColor: '#009cb4',
    disabled: {
      background: '#59bfce',
      color: '#c5e9ee',
    },
  },
  success: {
    background: '#5CB85C',
    color: '#f5f5f5',
    hover: '#449d44',
    borderColor: '#5CB85C',
    disabled: {
      background: '#95d195',
      color: '#daefda',
    },
  },
  default: {
    background: 'white',
    color: 'black',
    hover: '#e6e6e6',
    borderColor: '#ccc',
    disabled: {
      background: '#e6e6e6',
      color: '#7a7a7a',
    },
  },
}

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'sans-serif',
    width: '57px',
    height: '32px',
    display: 'inline-block',
    marginBottom: 0,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    border: '1px solid #adadad',
    borderRadius: '4px',
    position: 'relative',
    overflow: 'hidden',
    '& .button': {
      display: 'inline-block',
      padding: '6px 12px',
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
        paddingLeft: '24px',
        right: 0,
      },
      '& > .switch-slider': {
        backgroundColor: '#fff',
        position: 'relative',
        margin: '0 auto',
        paddingTop: '0px',
        paddingBottom: '0px',
        height: '100%',
        width: '4px',
        borderRadius: '4px',
        borderWidth: '0px 1px',
        borderColor: '#ccc',
        borderStyle: 'solid',
      },
    },
    // Sizes
    '&.switch-small': {
      width: '53px',
      height: '28px',
      '& > .switch-group': {
        '& .switch-on': {
          paddingTop: '4px',
          paddingLeft: '11px',
        },
        '& .switch-off': {
          paddingTop: '4px',
          paddingLeft: '23px',
        },
        '& .switch-slider': {
          width: '2px',
          padding: '0px 10px',
        },
      },
    },
    '&.switch-smallest': {
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
      cursor: 'not-allowed',
      '*': {
        cursor: 'not-allowed',
      }
    },
    // Color stuff
    // TODO use theme
    // TODO cool method to generate these?
    // TODO fade et darken
    '&.switch-color-primary': {
      '&.switch-checked': {
        borderColor: variants.primary.borderColor,
      },
      '& .switch-on': {
        backgroundColor: variants.primary.background,
        color: variants.primary.color,
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
      '&.disabled': {
        '&.switch-checked': {
          borderColor: variants.default.disabled.background,
        },
        '& .switch-on': {
          backgroundColor: variants.default.disabled.background,
          color: variants.default.disabled.color,
        }
      },
    },
  },
}))

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

  const classes = classNames(className, `switch-${size}`, `switch-color-${color}`, useStyles().root, {
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

// TODO utiliser makestyles (à confirmer) makeStyles(theme => createStyles({
// TODO utiliser large au lieu de smallest?
// TODO TU lul

export default Switch
