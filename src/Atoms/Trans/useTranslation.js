import React, { createContext, useContext, useMemo, Fragment } from 'react'
import { deepMerge } from '../../utils'
const Context = createContext()
const { Provider: BaseProvider } = Context

export const Provider = ({ value, ...props }) => {
  const translations = useContext(Context) || {}
  const merged = useMemo(
    () => deepMerge(translations, value),
    [translations, value],
  )

  return <BaseProvider value={merged} {...props} />
}

export default () => {
  const translations = useContext(Context) || {}

  return (transKey = '', parameters = {}) => {
    const translation = transKey.split('.').reduce(
      (acc, k) => acc[k] || transKey,
      translations,
    )

    const params = Object.entries(parameters)
    const children = params.length ? replace(translation, params) : [translation]

    return (
      !children.some(child => typeof child === 'object') ? children.join('') :
      React.createElement(Fragment, null, ...children)
    )
  }
}

export const replace = (str, parameters) => {
  const mapReplace = parameters.reduce(
    (acc, [k, v]) => Object.assign(acc, { [`%${k}%`]: v }),
    {},
  )
  const re = new RegExp(Object.keys(mapReplace).join('|'), 'g')

  const children = []
  let match
  let lastIndex = 0
  while ((match = re.exec(str)) != null) {
    children.push(str.slice(lastIndex, match.index))
    children.push(mapReplace[match[0]])
    lastIndex = re.lastIndex
  }
  return children
}
