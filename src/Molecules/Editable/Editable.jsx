import React, { Children } from 'react'
import { ArrowRightAlt } from '@styled-icons/material/ArrowRightAlt'
import { format } from 'date-fns'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormGroup from '@material-ui/core/FormGroup'

import StatusChip from '../../Atoms/StatusChip'
import FormControl from '../FormControl'
import FormHelperText from '../FormControl/FormHelperText'
import InputLabel from '../FormControl/InputLabel'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'
import Typo from '../../Atoms/Typo'
import FlexBox from '../../Templates/FlexBox'
import DateRange from '../../Molecules/DateRange'

Input.defaultProps = {
  autoFocus: true,
}

const DefaultFormControl = ({
  Type,
  label = '',
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
  Description = DefaultDescription,
  edit,
  onEdit = () => {},
  onValid = () => {},
  FormControl = DefaultFormControl,
  label = '',
  Type = Input,
  value = '',
  labelSize = 'title',
  descriptionSize = 'title',
  descriptionFontFamily = '',
  ...props
}) => (
  edit ? <FormControl label={label} Type={Type} value={value} {...props}/> :
  <FlexBox onClick={() => onEdit(true)} gap={1} flexDirection="column">
    {!!label &&
        <Typo fontSize={labelSize} fontWeight="title" fontFamily="title">
          {label}
        </Typo>
    }
    <Description value={value} Type={Type} descriptionSize={descriptionSize} descriptionFontFamily={descriptionFontFamily} {...props}/>
  </FlexBox>
)

const DefaultDescription = ({
  Type, value, descriptionSize, descriptionFontFamily, children,
}) =>
  Type === Select ? (
    Children
      .toArray(children)
      .reduce((acc, child) => ({ ...acc, [child.props.value]: child.props.children }), {})[value]
  )    : Type === DateRange ? (
    <FlexBox gap={2} as={Typo} fontSize={descriptionSize} fontFamily={descriptionFontFamily}>
      <span>{format(value.start, 'Pp')}</span>
      <ArrowRightAlt size={16} />
      <span>{format(value.end, 'Pp')}</span>
    </FlexBox>
  ) : Type === RadioGroup ? (
    Children
      .toArray(children)
      .reduce((acc, child) => ({ ...acc, [child.props.value]: child.props.label }), {})[value]
  ) : Type === FormGroup ? (
    <FlexBox as={Typo} gap={2} fontSize={descriptionSize}>
      {Object
        .entries(value)
        .filter(([name, value]) => !!value)
        .map(([name, value]) =>
          <StatusChip key={`chip-${value}`}>
            {Children
              .toArray(children)
              .reduce((acc, child) => ({ ...acc, [child.props.control.props.value]: child.props.label }), {})[name]
            }
          </StatusChip>,
        )
      }
    </FlexBox>
  ) : <FlexBox fontSize={descriptionSize} fontFamily={descriptionFontFamily}>
    {value}
  </FlexBox>

export default Editable
