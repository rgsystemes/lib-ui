import React, { createContext, useContext, useMemo } from 'react'
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
    console.info(transKey.split('.'), translations)
    let translated = transKey
      .split('.')
      .reduce(
        (acc, k) => acc[k] || transKey,
        translations,
      )

    Object.entries(parameters).forEach(([key, value]) => {
      translated = translated.replace(new RegExp(`%${key}%`, 'g'), value)
    })

    return translated
  }
}
