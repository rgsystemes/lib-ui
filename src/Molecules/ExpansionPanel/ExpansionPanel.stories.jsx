import React, { useState } from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
} from './index'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { KeyboardArrowUp } from 'styled-icons/material/KeyboardArrowUp'
import { MoreHoriz } from 'styled-icons/material/MoreHoriz'
import {
  Button, ButtonGroup, Menu, MenuItem, Typo,
} from '../../Atoms'
import markdown from './README.md'

export default {
  title: 'Molecules/ExpansionPanel',
}

const panels = [
  ['Title #1', 'Details #1'],
  ['Title #2', 'Details #2'],
]

export const expansionPanel = () => panels.map(([summary, details]) =>
  <ExpansionPanel defaultExpanded>
    <ExpansionPanelSummary>
      <Typo>
        {summary}
      </Typo>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typo>
        {details}
      </Typo>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

const Toggle = styled(
  ({ expanded, ...props }) => <Button { ...props } />
).attrs(props => ({
  children: props.expanded ? <KeyboardArrowUp size={14}/> : <KeyboardArrowDown size={14}/>,
  ...props,
}))`
  float: right;
`
Toggle.defaultProps = {
  size: 'small',
}

export const controledExpansionPanel = () => {
  const [expanded, setExpanded] = useState(false)
  const [anchorEl, setAnchorEl] = useState()
  const toggle = () => setExpanded(!expanded)
  const handleMenuItemClick = e => {
    action('Menu item clicke')(e)
    setAnchorEl(null)
  }

  return panels.map(panel =>
    <ExpansionPanel expanded={expanded} onChange={action('internal panel toggle called')} >
      <ExpansionPanelSummary>
        <Typo>
          Summary
        </Typo>
        <ExpansionPanelActions>
          <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={handleMenuItemClick}>
                Action
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
                AnotherAction
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
                Something else here
            </MenuItem>
          </Menu>
          <ButtonGroup size="small">
            <Button size="small" onClick={event => setAnchorEl(event.currentTarget)}>
              <MoreHoriz size={14}/>
            </Button>
            <Toggle expanded={expanded} onClick={toggle} />
          </ButtonGroup>
        </ExpansionPanelActions>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typo>
          Details
        </Typo>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
expansionPanel.story = {
  parameters: {
    notes: { markdown },
    jest:  ['ExpansionPanel.test.jsx'],
  },
}
