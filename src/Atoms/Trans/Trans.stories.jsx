import React from 'react'

import Trans, { TransProvider, useTranslation } from './index'
import FlexBox from '../../Templates/FlexBox'

import markdown from './README.md'

export default {
  title: 'Atoms/Trans',
}

const LocalWrapper = ({ translations = {}, ...props }) => {
  const t = useTranslation()
  const lang = t('lang')

  return <TransProvider value={translations[lang]} {...props} />
}

const TransWrapper = ({ transKey, ...props }) => <div><b>{transKey}</b>: <Trans {...props}>{transKey}</Trans></div>

const FirstChild = () => (
  <FlexBox flexDirection="column" gap={0.5} bgcolor="rgba(0, 0, 255, 0.1)" p={2}>
    <LocalWrapper translations={{ en: { scope: 'first child' }, fr: { value: 'premier enfant' } }}>
      <TransWrapper transKey="scope" />
    </LocalWrapper>
  </FlexBox>
)

const SecondChild = () => (
  <FlexBox flexDirection="column" gap={0.5} bgcolor="rgba(0, 255, 0, 0.1)" p={2}>
    <LocalWrapper translations={{
      en: { scope: 'second child', local: { value: 'some specific local value can be declared' } },
      fr: { scope: 'deuxième enfant', local: { value: 'une valeur locale peut être déclarée' } },
    }}>
      <TransWrapper transKey="scope" />
      <TransWrapper transKey="local.value" />
      <TransWrapper transKey="keep" />
    </LocalWrapper>
  </FlexBox>
)

export const trans = () => <>
  <FlexBox flexDirection="column" gap={2} bgcolor="rgba(0, 0, 0, 0.1)" p={2}>
    <LocalWrapper translations={{
      en: {
        scope:      'parent',
        keep:       'not overridden value still reachable',
        outscope:   'Not accessible from outside it\'s scope so fallback is used',
        JSXReplace: 'JSX can be used in %variables%',
      },
      fr: {
        scope:      'parent',
        keep:       'valeur non surchargée toujours accessibles',
        outscope:   'Non accessible en dehors de son scope le fallback est donc utilisé',
        JSXReplace: 'Du JSX peut être utilisé dans les %variables%',
      },
    }}>
      <TransWrapper transKey="JSXReplace" variables={<span style={{ color: 'red', fontWeight: 'bold' }}>variables</span>} />
      <TransWrapper transKey="scope" />
      <FirstChild />
      <SecondChild />
      <TransWrapper transKey="scope" />
      <TransWrapper transKey="keep" />
      <Trans>outscope</Trans>
      <TransWrapper transKey="local.value" />
    </LocalWrapper>
  </FlexBox>
</>

trans.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Trans.test.jsx'],
  },
}
