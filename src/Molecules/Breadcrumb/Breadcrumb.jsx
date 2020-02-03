import React from 'react'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import BaseItem from './Item'

const Breadcrumb = (
  {
    path = [],
    Item = BaseItem,
    ...props
  }
) => (
  <Breadcrumbs aria-label="breadcrumb" data-testid="breadcrumb">
    {path.map(({ id, ...pathProps }) =>
      <Item key={id} id={id} { ...pathProps} {...props} />
    )}
  </Breadcrumbs>
)

export default Breadcrumb
