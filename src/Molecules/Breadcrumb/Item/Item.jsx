import React from 'react'
import styled from 'styled-components'
import Link from '@material-ui/core/Link'
import { css } from '@styled-system/css'
import Typo from '../../../Atoms/Typo'

const StyledLink = styled(Link)`
  &:hover {
    ${css({ color: 'primary' })}
  }
`

const Item = ({ id, name, href, onClick }) => {
  const computedHref = typeof href === 'function' ? href(id, name) : href

  return (
    (computedHref || onClick) ? (
      <StyledLink key={id} href={computedHref} onClick={onClick} color="primary" data-testid={`link-${id}`}>
        <Typo color="primary" data-testid={`typo-${id}`}>{name}</Typo>
      </StyledLink>
    ) :
      <Typo key={id} color="grey" data-testid={`typo-${id}`}>{name}</Typo>
  )
}

export default Item
