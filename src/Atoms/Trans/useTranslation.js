import { createContext, useContext } from 'react'
const Context = createContext()
export const { Provider } = Context

export default () => {
  const translations = useContext(Context) || {}

  return (transKey = '', parameters = {}) => {
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
