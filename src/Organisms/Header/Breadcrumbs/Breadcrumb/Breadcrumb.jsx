import React from 'react'
import styled from 'styled-components'
import { Select } from '../../../../Atoms'

const StyledSelect = styled(Select)`
  &:hover {
    background-color: transparent;
  }

  cursor: ${({ pointer }) => pointer ? 'pointer' : 'auto'}
`

const Breadcrumb = ({ children, siblings = [], icon, onSiblingSelect = () => {} }) =>
  <StyledSelect
    bg="transparent"
    border="0"
    pointer={siblings.length > 0}
    label={children}
    onChange={onSiblingSelect}
    options={siblings.map(({ id, name }) => ({ value: id, label: name }))}
  />

export default Breadcrumb
