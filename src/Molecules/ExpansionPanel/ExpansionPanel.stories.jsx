import React, { useState } from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
} from './index'
import { Button, ButtonGroup } from '../../Atoms'
import markdown from './README.md'

export default {
  title: 'Molecules/ExpansionPanel',
}

export const expansionPanel = () => (
  <ExpansionPanel defaultExpanded>
    <ExpansionPanelSummary>
      Summary
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      Details
    </ExpansionPanelDetails>
    <ExpansionPanelActions>
      <ButtonGroup>
        <Button size="small">Cancel</Button>
        <Button size="small" color="success">Save</Button>
      </ButtonGroup>
    </ExpansionPanelActions>
  </ExpansionPanel>
)

const Toggle = styled(
  ({ expanded, ...props }) => <Button { ...props } />
).attrs(props => ({
  children: props.expanded ? 'Fold' : 'Expand',
  ...props,
}))`
  float: right;
`
Toggle.defaultProps = {
  size: 'small',
}

const Summary = styled(ExpansionPanelSummary)`
  && .MuiExpansionPanelSummary-content {
    justify-content: space-between;
  }
`

export const controledExpansionPanel = () => {
  const [expanded, setExpanded] = useState(false)
  const toggle = () => setExpanded(!expanded)
  return (
    <ExpansionPanel expanded={expanded} onChange={action('internal panel toggle called')} >
      <Summary>
        Summary
        <Toggle expanded={expanded} onClick={toggle} />
      </Summary>
      <ExpansionPanelDetails>
        Details
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
        <ButtonGroup>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">Save</Button>
        </ButtonGroup>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}
expansionPanel.story = {
  parameters: {
    notes: { markdown },
    jest:  ['ExpansionPanel.test.jsx'],
  },
}
