import React from 'react'
import useTranslation from './useTranslation'

const Trans = ({ children, transKey = children, ...props }) => {
  const translate = useTranslation()

  return <>
    {translate(transKey, props)}
  </>
}

export default Trans
