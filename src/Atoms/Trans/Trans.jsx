import React from 'react'
import useTranslation from './useTranslation'

const Trans = ({ transKey }) => {
  const translate = useTranslation()

  return <>
    {translate(transKey)}
  </>
}

export default Trans
