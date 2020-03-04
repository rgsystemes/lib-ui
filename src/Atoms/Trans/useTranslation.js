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

const preProcessor = ({ translations }) => (key = '') => (
  key.split('.').reduce(
    (acc, k) => (acc[k] || key),
    translations,
  )
)

const processor = ({ translations = {}, ...context }) => {
  const params = Object.entries(context)
  if (!params.length) {
    return translation => [translation]
  }
  const mapReplace = params.reduce(
    (acc, [k, v]) => Object.assign(acc, { [`%${k}%`]: v }),
    {},
  )
  const re = new RegExp(Object.keys(mapReplace).join('|'), 'g')

  return function * (translation = '') {
    let lastIndex = 0
    for (const match of translation.matchAll(re)) {
      yield translation.slice(lastIndex, match.index)
      yield mapReplace[match[0]]
      lastIndex = match.index + match[0].length
    }
    yield translation.slice(lastIndex)
  }
}

const postProcessor = () => (processedTranslation = []) => {
  let result = ''
  for (const chunk of processedTranslation) {
    console.info('chunk', chunk)
    if (!['number', 'string'].includes(typeof chunk)) {
      return React.createElement(Fragment, null, result, chunk, ...processedTranslation)
    }
    result = result.concat(chunk)
  }
  return result
}

export default () => {
  const translations = useContext(Context) || {}

  return (transKey = '', parameters = {}) => {
    const context = { translations, ...parameters }

    const preProcessed = preProcessor(context)(transKey)
    const processed = processor(context)(preProcessed)
    const postProcessed = postProcessor(context)(processed)

    console.info(transKey, postProcessed)
    return postProcessed
  }
}
