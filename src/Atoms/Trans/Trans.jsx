import React from 'react'
import useTranslation from './useTranslation'

const Trans = ({ transKey, ...props }) => {
  const translate = useTranslation()

  return <>
    {translate(transKey, props)}
  </>
}

export default Trans
