import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import {{ pascalCase name }} from './index'

import markdown from './README.md'

export default {
  title: '{{ pascalCase name }}',
}

export const {{ camelCase name }} = () => (
  <{{ pascalCase name }} />
)
{{ camelCase name }}.story = {
  parameters: {
    notes: { markdown },
    jest:  ['{{ pascalCase name }}.test.jsx'],
  },
}
