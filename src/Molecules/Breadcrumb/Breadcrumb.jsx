import React from 'react'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import BaseItem from './Item'

const Breadcrumb = (
  {
    path = [],
    Item = BaseItem,
    className = '',
    ...props
  }
) => (
  <Breadcrumbs aria-label="breadcrumb" data-testid="breadcrumb" {...props}>
    {path.map(({ id, ...pathProps }) =>
      <Item key={id} id={id} { ...pathProps} />
    )}
  </Breadcrumbs>
)

export default Breadcrumb
