import React from 'react'
import { css } from '@styled-system/css'
import styled from 'styled-components'

import Trans from '../../Atoms/Trans'
import Icon from '../../Atoms/Icon'
import Typo from '../../Atoms/Typo'
import { Trash } from 'styled-icons/boxicons-solid/Trash'

const Filter = styled.div``

const Container = styled.div`
  min-width: 200px;
  .MuiFormControl-root {
    ${css({ px: 'l', py: 'm' })};
  }
`

const Clear = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid lightgrey;
  ${css({ mt: 'm', px: 'l', py: 'm' })};
`

const FilterWrapper = ({ children, onClear, ...props }) =>
  <Container>
    <Filter {...props}>
      {children}
    </Filter>
    <Clear onClick={onClear}>
      <Icon Component={Trash} size="small"/>
      <Typo color="gray">
        <Trans>global.remove</Trans>
      </Typo>
    </Clear>
  </Container>

export default FilterWrapper
