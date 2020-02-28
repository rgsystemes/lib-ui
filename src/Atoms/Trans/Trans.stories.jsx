import React from 'react'

import Trans, { TransProvider, useTranslation } from './index'
import FlexBox from '../../Templates/FlexBox'

import markdown from './README.md'

export default {
  title: 'Atoms/Trans',
}

export const LocalWrapper = ({ translations = {}, ...props }) => {
  const t = useTranslation()
  const lang = t('lang')

  return <TransProvider value={translations[lang]} {...props} />
}

const Value = () => <div><b>scope</b>: <Trans>scope</Trans></div>

const FirstChild = () => (
  <FlexBox flexDirection="column" gap={0.5} bgcolor="rgba(0, 0, 255, 0.1)" p={2}>
    <LocalWrapper translations={{ en: { scope: 'first child' }, fr: { value: 'premier enfant' } }}>
      <Value />
    </LocalWrapper>
  </FlexBox>
)

const SecondChild = () => (
  <FlexBox flexDirection="column" gap={0.5} bgcolor="rgba(0, 255, 0, 0.1)" p={2}>
    <LocalWrapper translations={{
      en: { scope: 'second child', local: { value: 'some specific local value can be declared' } },
      fr: { scope: 'deuxième enfant', local: { value: 'une valeur locale peut être déclarée' } },
    }}>
      <Value />
      <div><b>local.value</b>: <Trans>local.value</Trans></div>
      <div><b>keep</b>: <Trans>keep</Trans></div>
    </LocalWrapper>
  </FlexBox>
)

export const trans = () => <>
  <FlexBox flexDirection="column" gap={2} bgcolor="rgba(0, 0, 0, 0.1)" p={2}>
    <LocalWrapper translations={{
      en: {
        scope:    'parent',
        keep:     'not overridden value still reachable',
        outscope: 'isn\'t accessible from outside it\'s scope so fallback is used',
      },
      fr: {
        scope:    'parent',
        keep:     'valeur non surchargée toujours accessibles',
        outscope: 'n\'est pas accessible en dehors de son scope le fallback est donc utilisé',
      },
    }}>
      <Value />
      <FirstChild />
      <SecondChild />
      <Value />
      <div><b>keep</b>: <Trans>keep</Trans></div>
      <div><b><Trans>local.value</Trans></b> <Trans>outscope</Trans></div>
    </LocalWrapper>
  </FlexBox>
</>

trans.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Trans.test.jsx'],
  },
}
