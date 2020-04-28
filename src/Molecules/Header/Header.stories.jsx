import React, { useState } from 'react'
import { MemoryRouter as Router, Route } from 'react-router'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'
import { Heart, Star, Home } from 'styled-icons/feather'

import Header from './index'
import ButtonGroup from '../../Atoms/ButtonGroup'
import Icon from '../../Atoms/Icon'
import StatusChip from '../../Atoms/StatusChip'
import Tooltip from '../../Atoms/Tooltip'
import TableList from '../TableList'

import markdown from './README.md'

export default {
  title: 'Molecules/Header',
}

const SpacedTableList = () => <TableList style={{ marginTop: 10 }} />

export const header = () => {
  const [subFeature, setSubFeature] = useState('Header')
  const [isEditing, setEditing] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = value => {
    setLoading(true)
    setTimeout(() => {
      const success = value && !/\W/.test(value.replace(/\s/g, ''))
      action('saved')(success)
      setEditing(!success)
      setLoading(false)
      setSubFeature(value)
    }, 3000)
  }

  return (
    <>
      <Header
        feature="Atoms"
        subFeature="StaticHeader"
        status={<Tooltip title="Complex Formula">
          <span> {/* FIXME: add forwardRef to StatusChip */}
            <StatusChip fontFamily="fontFamily" status="success">
              HO⁻ + H₃O⁺ = 2 H₂O
            </StatusChip>
          </span>
        </Tooltip>}
      />
      <SpacedTableList />
      <br/>
      <Router>
        <Route render={({ location }) => action('route')(location.pathname + location.search)} />
        <Header
          isEditing={isEditing}
          isLoading={isLoading}
          feature="Molecules"
          featurePath="/?path=/story/molecules-header--header"
          subFeature={subFeature}
          onEdit={() => setEditing(true)}
          onCancel={() => setEditing(false)}
          onSubmit={value => action('save')(value) || handleSubmit(value)}
          actions={() => <ButtonGroup>
            <Icon button Component={Heart} onClick={() => action('click')('heart')} />
            <Icon button Component={Star} onClick={() => action('click')('star')} />
            <Icon button Component={Home} onClick={() => action('click')('home')} />
          </ButtonGroup>}
        />
        <SpacedTableList />
      </Router>
    </>
  )
}

header.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Header.test.jsx'],
  },
}
