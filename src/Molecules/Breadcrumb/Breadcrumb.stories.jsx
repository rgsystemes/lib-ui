import React from 'react'

import Breadcrumb from './index'
import markdown from './README.md'

export default {
  title: 'Atoms/Breadcrumb',
}

const path = [
  { id: 1, name: 'Root' },
  { id: 5, name: 'Sub element' },
]

export const breadcrumb = () => (
  <Breadcrumb
    path={path.map(props => ({
      ...props,
      href: false,
    }))}
  />
)

breadcrumb.story = {
  parameters: {
    notes: { markdown },
  },
}

export const breadcrumbWithLink = () => (
  <Breadcrumb
    path={path.map(props => ({
      ...props,
      href: props.id,
    }))}
  />
)

breadcrumbWithLink.story = {
  parameters: {
    notes: { markdown },
  },
}

export const breadcrumbWithLinkExceptTheLastOne = () => (
  <Breadcrumb
    path={path.map((props, index) => ({
      ...props,
      href: id => index === (path.length - 1) ? false : id,
    }))}
  />
)

breadcrumbWithLinkExceptTheLastOne.story = {
  parameters: {
    notes: { markdown },
  },
}
