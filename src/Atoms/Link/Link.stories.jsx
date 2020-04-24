import React from 'react'
import { MemoryRouter as Router } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

import Link from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Link',
}

export const link = () => (
  <Router>
    <Link component={RouterLink} to="/">
      Link
    </Link>
  </Router>
)

link.story = {
  parameters: {
    notes: { markdown },
  },
}
