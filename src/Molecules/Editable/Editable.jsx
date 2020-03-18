import React from 'react'
import FormControl from '../FormControl'
import FormHelperText from '../FormControl/FormHelperText'
import InputLabel from '../FormControl/InputLabel'
import Input from '../../Atoms/Input'
import Typo from '../../Atoms/Typo'
import FlexBox from '../../Templates/FlexBox'

Input.defaultProps = {
  autoFocus: true,
}

const DefaulFormControl = ({
  Type = Input,
  label,
  helpText = '',
  ...props
}) => (
  <FormControl>
    <InputLabel>
      {label}
      <Type {...props} />
    </InputLabel>
    {!!helpText &&
      <FormHelperText>
        {helpText}
      </FormHelperText>
    }
  </FormControl>
)

const Editable = ({
  children,
  edit,
  onEdit = () => {},
  onValid = () => {},
  FormControl = DefaulFormControl,
  label,
  ...props
}) => (
  edit ? <FormControl label={label} {...props}/> :
  <FlexBox onClick={() => onEdit(true)} gap={1} flexDirection="column">
    {!!label &&
        <Typo fontSize="title" fontWeight="title" fontFamily="title">
          {label}
        </Typo>
    }
    {children}
  </FlexBox>
)

export default Editable
