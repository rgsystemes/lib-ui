import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import Trans from '../../../Atoms/Trans'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import { DragHandle } from 'styled-icons/material/DragHandle'
import { Columns } from 'styled-icons/boxicons-regular/Columns'

import { ListItemIcon, ListItemText } from '../../../Molecules/List'
import Checkbox from '../../../Atoms/Checkbox'
import Typo from '../../../Atoms/Typo'
import IconButton from '../../../Atoms/IconButton'

const ColumnsIcon = styled(Columns)`
  ${css({ mr: 'm' })}
`

const Container = styled.div`
  width: 270px;
  ${css({ px: 'xl' })}
`

const Title = styled(Typo)`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${css({ mb: 'm' })};
`

const EditColumns = ({
  descriptionText = <Trans transKey="global.editColumns.description"/>,
  columns,
  onChange = () => {},
  ...props
}) => {
  const enabledColumns = columns.filter(({ show }) => show)
  const disabledColumns = columns.filter(({ show }) => !show)

  return <Container>
    <Title as="h2" fontSize="l" color="primary">
      <ColumnsIcon size={24} />
      <Trans transKey="global.editColumns.title" />
    </Title>
    <Typo>
      {descriptionText}
    </Typo>
    {enabledColumns.length > 0 &&
        <List
          dense={true}
          subheader={
            <ListSubheader disableSticky={true} component="div">
              <Trans transKey="global.editColumns.enabledColumns"/>
            </ListSubheader>
          }
        >
          {enabledColumns.map(({ name, translationKey, description, show }) =>
            <ListItem disableGutters={true} key={name}>
              <ListItemIcon>
                <Checkbox
                  inputProps={{
                    'data-testid': `toggle-column-${name}`,
                  }}
                  onChange={event => onChange(name, event.target.checked)}
                  checked={true}
                  color="default"
                />
              </ListItemIcon>
              <ListItemText id={name} primary={translationKey} secondary={description} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="drag">
                  <DragHandle size={18} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
    }
    {disabledColumns.length > 0 &&
        <List
          dense={true}
          subheader={
            <ListSubheader component="div">
              <Trans transKey="global.editColumns.disabledColumns"/>
            </ListSubheader>
          }
        >
          {disabledColumns.map(({ name, translationKey, description, show }) =>
            <ListItem disableGutters={true} key={name}>
              <ListItemIcon>
                <Checkbox
                  inputProps={{
                    'data-testid': `toggle-column-${name}`,
                  }}
                  onChange={event => onChange(name, event.target.checked)}
                  checked={false}
                />
              </ListItemIcon>
              <ListItemText id={name} primary={translationKey} secondary={description} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="drag">
                  <DragHandle size={18} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
    }
  </Container>
}
export default EditColumns
