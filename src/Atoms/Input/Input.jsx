import styled from 'styled-components'
import { space, typography } from 'styled-system'
import { css } from '@styled-system/css'
import InputBase from '@material-ui/core/InputBase'

const Input = styled(InputBase)`
  label + & {
    ${css({ marginTop: 'm' })};
  }

  .MuiInputBase-input {
    &:focus {
      ${css({ boxShadow: '0 0px 8px #66afe9', borderColor: '#66afe9' })}
    }
    &.Mui-disabled {
      ${(css({ color: 'lightgrey' }))};
    }
  }

  &.Mui-error {
    .MuiInputBase-input {
      ${css({ color: '#a94442', borderColor: '#a94442' })}
      &:focus {
        ${css({ boxShadow: '0 0 8px #a94442' })}
      }
    }
  }

  .MuiInputBase-input {
    transition: all 0.1s ease-out;
    transition-property: box-shadow, border-color, color;
    ${space};
    ${typography};
    ${css({
    position:     'relative',
    borderRadius: '1',
    border:       '1px solid',
    borderColor:  'lightgrey',
    color:        'text',
  })};
  }
`

Input.defaultProps = {
  px:         'l',
  py:         'm',
  lineHeight: '1',
}

export default Input
