import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  const variants = {
    primary: {
      background:  theme.palette.primary.main,
      color:       theme.palette.primary.contrastText,
      hover:       theme.palette.primary.dark,
      borderColor: theme.palette.primary.main,
      disabled:    {
        background:  theme.palette.primary.light,
        color:       theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.light,
      },
    },
    success: {
      background:  theme.palette.success.main,
      color:       theme.palette.success.contrastText,
      hover:       theme.palette.success.dark,
      borderColor: theme.palette.success.main,
      disabled:    {
        background:  theme.palette.success.light,
        color:       theme.palette.success.contrastText,
        borderColor: theme.palette.success.light,
      },
    },
    default: {
      background:  'white',
      color:       'black',
      hover:       '#e6e6e6',
      borderColor: '#ccc',
      disabled:    {
        background:  'white',
        color:       '#7a7a7a',
        borderColor: '#ccc',
      },
    },
  }

  const colors = ['primary', 'success', 'default'].reduce((colors, variant) => Object.assign(colors, {
    [`&.switch-color-${variant}`]: {
      '&.switch-checked': {
        borderColor: variants[variant].borderColor,
      },
      '& .switch-on': {
        backgroundColor: variants[variant].background,
        color:           variants[variant].color,
      },
      '&:not(.disabled) .switch-on:hover': {
        backgroundColor: variants[variant].hover,
        borderColor:     variants[variant].hover,
      },
      '&.disabled': {
        '&.switch-checked': {
          borderColor: variants[variant].disabled.borderColor,
        },
        '& .switch-on': {
          backgroundColor: variants[variant].disabled.background,
          color:           variants[variant].disabled.color,
        },
      },
    },
  }), {})

  return {
    root: {
      fontFamily:    'sans-serif',
      width:         53,
      height:        28,
      display:       'inline-block',
      marginBottom:  0,
      fontSize:      '14px',
      fontWeight:    400,
      lineHeight:    1.5,
      textAlign:     'center',
      whiteSpace:    'nowrap',
      verticalAlign: 'middle',
      cursor:        'pointer',
      border:        '1px solid #ccc',
      borderRadius:  4,
      position:      'relative',
      overflow:      'hidden',
      '& .button':   {
        display:      'inline-block',
        padding:      '4px 11px',
        marginBottom: 0,
        textAlign:    'center',
        whiteSpace:   'nowrap',
        cursor:       'pointer',
        userSelect:   'none',
        position:     'absolute',
        margin:       0,
        top:          0,
      },
      '&:not(.switch-checked) .switch-group': {
        left: '-100%',
      },
      '&:not(.disabled):hover': {
        borderColor: '#a4a4a4',
      },
      '& > .switch-group': {
        textAlign:        'center',
        whiteSpace:       'nowrap',
        cursor:           'pointer',
        position:         'absolute',
        width:            '200%',
        top:              0,
        bottom:           0,
        left:             0,
        transition:       'left 0.35s',
        '& > .switch-on': {
          left:         0,
          paddingRight: 24,
          right:        '50%',
        },
        '& > .switch-off': {
          left:            '50%',
          paddingLeft:     23,
          right:           0,
          backgroundColor: '#e6e6e6',
        },
        '& > .switch-slider': {
          backgroundColor: '#fff',
          position:        'relative',
          margin:          '0 auto',
          width:           2,
          padding:         '0px 10px',
          height:          '100%',
          borderRadius:    4,
          borderWidth:     '0px 1px',
          borderColor:     '#ccc',
          borderStyle:     'solid',
        },
      },
      // Sizes
      '&.switch-large': {
        width:               57,
        height:              31,
        '& > .switch-group': {
          '& .switch-on': {
            paddingTop:  6,
            paddingLeft: 12,
          },
          '& .switch-off': {
            paddingTop:  6,
            paddingLeft: 24,
          },
          '& .switch-slider': {
            paddingTop:    0,
            paddingBottom: 0,
            width:         4,
          },
        },
      },
      '&.switch-small': {
        width:               34,
        height:              20,
        fontSize:            11,
        '& > .switch-group': {
          '& .switch-on': {
            paddingTop:  2,
            paddingLeft: 7,
          },
          '& .switch-off': {
            paddingTop:  2,
            paddingLeft: 12,
          },
          '& .switch-slider': {
            width:   1,
            padding: '0px 5px',
          },
        },
      },
      // Disabled
      '&.disabled': {
        borderColor: '#dedede',
        cursor:      'not-allowed',
        '& *':       {
          cursor: 'not-allowed',
        },
        '& > .switch-group': {
          '& > .switch-off': {
            backgroundColor: '#efefef',
            color:           '#747474',
          },
        },
      },
      ...colors,
    },
  }
})

export const Switch = ({
  className,
  disabled = false,
  onChange = () => {},
  checked = false,
  size = 'medium',
  color = 'primary',
  ...props
}) => {
  const [state, setState] = useState(checked)

  const onClick = () => {
    if (disabled) {
      return
    }

    const newState = !state
    setState(newState)
    onChange({
      target: {
        checked: newState,
      },
    })
  }

  const classes = clsx(className, `switch-${size}`, `switch-color-${color}`, useStyles().root, {
    disabled:         disabled,
    'switch-checked': state,
  })

  return <div className={classes} onClick={onClick} { ...props }>
    <div className="switch-group">
      <label className="switch-on button">On</label>
      <label className="switch-off button">Off</label>
      <span className="switch-slider button" />
    </div>
  </div>
}

export default Switch
