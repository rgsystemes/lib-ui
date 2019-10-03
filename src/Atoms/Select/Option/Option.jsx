import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import css from '@styled-system/css'

const Container = styled.div`
  ${space}
  &:hover {
    ${css({ bg: 'lightgray' })}
  }
`

Container.defaultProps = {
  px: '3',
  py: '1',
}

const DefaultOptionRender = ({ children }) => <>{children}</>

const Option = ({ onChange, Component = DefaultOptionRender, value }) => (
  <Container onClick={() => onChange(value)}>
    <Component>{ value }</Component>
  </Container>
)

export default Option
