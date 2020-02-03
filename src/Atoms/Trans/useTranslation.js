import { createContext, useContext } from 'react'
const Context = createContext()
export const { Provider } = Context

export default () => {
  const translations = useContext(Context) || {}

  return transKey => transKey.split('.').reduce(
    (acc, k) => acc[k] || transKey,
    translations
  )
}
