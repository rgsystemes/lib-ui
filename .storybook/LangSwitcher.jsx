import React, { useState, useMemo } from 'react'
import { TransProvider } from '../src/Atoms/Trans'

const LangSwitcher = ({ langs = {}, children }) => {
  const availableLangs = useMemo(() => Object.keys(langs), [])
  const [lang, setLang] = useState(availableLangs[0])

  return (
    <TransProvider value={langs[lang]}>
      <select onChange={ev => setLang(ev.target.value)}>
        {availableLangs.map(value =>
          <option value={value} key={value}>{value}</option>
        )}
      </select>
      <div>
        {children}
      </div>
    </TransProvider>
  )
}

export default LangSwitcher
