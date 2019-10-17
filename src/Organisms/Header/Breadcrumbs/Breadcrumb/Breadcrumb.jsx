import React from 'react'
import styled from 'styled-components'
import { Select, Typo } from '../../../../Atoms'

const StyledSelect = styled(Select)`
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`

const Breadcrumb = ({ children, siblings = [], icon, onSiblingSelect = () => {} }) =>
  <Typo>
    {siblings.length > 0 ? <StyledSelect
      bg="transparent"
      border="0"
      label={children}
      onChange={onSiblingSelect}
      options={siblings.map(({ name }) => name)}
    /> :
    <span>{children}</span>}
  </Typo>

export default Breadcrumb
