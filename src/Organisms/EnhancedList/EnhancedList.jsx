import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import Paper from '@material-ui/core/Paper'
import { Download } from 'styled-icons/boxicons-regular/Download'
import { Columns } from 'styled-icons/boxicons-regular/Columns'
import { Search } from 'styled-icons/material/Search'
import { Plus } from 'styled-icons/boxicons-regular/Plus'

import { useTranslation } from '../../Atoms/Trans'
import BasePagination from '../../Molecules/Pagination'
import BaseExport from '../../Molecules/Export'
import BaseEditColumns from './EditColumns'
import BaseMenu from '../../Atoms/Menu'
import Tooltip from '../../Atoms/Tooltip'
import ButtonGroup from '../../Atoms/ButtonGroup'
import Icon from '../../Atoms/Icon'
import Input from '../../Atoms/Input'
import InputAdornment from '../../Atoms/Input/InputAdornment'

import TableList from '../../Molecules/TableList'

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
`

const SearchWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  & > * {
    ${css({ mx: 's' })};
  }
`

const Menu = styled(BaseMenu)`
  .MuiMenu-paper {
    width: 350px;
  }
`

const SearchInput = styled(Input)`
  flex-grow: 1;
`

const ActionGroup = styled(ButtonGroup)`
  ${(css({ mx: 's' }))}
`

const EnhancedList = ({
  onSearch = null,
  onAdd = null,
  columns,
  actions = [],
  Export = BaseExport,
  EditColumns = BaseEditColumns,
  View = TableList,
  Pagination = BasePagination,
  SearchInputProps = {},
  ...props
}) => {
  const [exportAnchorEl, setExportAnchorEl] = useState(null)
  const [editColumnsAnchorEl, setEditColumnsAnchorEl] = useState(null)
  const [searchTerm, setSearchTerm] = useState()
  const t = useTranslation()

  return <>
    <Toolbar component={Paper}>
      <SearchWrapper>
        <Pagination/>
        {onSearch != null &&
          <SearchInput
            size="small"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            endAdornment={
              <InputAdornment>
                <Icon Component={Search} data-testid="search-button" onClick={() => onSearch(searchTerm)} />
              </InputAdornment>
            }
            {...SearchInputProps}
          />
        }
      </SearchWrapper>
      <div>
        <ActionGroup size="small">
          {onAdd != null &&
            <Tooltip title={t('global.add')}>
              <Icon button Component={Plus} data-testid="add-button" onClick={onAdd} />
            </Tooltip>
          }
        </ActionGroup>
        <ActionGroup size="small">
          {!!Export &&
            <Tooltip title={t('global.export.title')}>
              <Icon button Component={Download} onClick={event => setExportAnchorEl(event.currentTarget)} />
            </Tooltip>
          }
          {!!EditColumns &&
            <Tooltip title={t('global.editColumns.title')}>
              <Icon button Component={Columns} onClick={event => setEditColumnsAnchorEl(event.currentTarget)} />
            </Tooltip>
          }
        </ActionGroup>
        {actions.map(actionGroup =>
          <ActionGroup size="small">
            {actionGroup.map(action => action)}
          </ActionGroup>
        )}
      </div>
    </Toolbar>
    <View columns={columns.filter(({ show }) => show)} {...props}/>
    {!!Export &&
      <Menu
        open={Boolean(exportAnchorEl)}
        anchorEl={exportAnchorEl}
        onClose={() => setExportAnchorEl(null)}
        anchorOrigin={{
          vertical:   'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical:   'top',
          horizontal: 'right',
        }}
      >
        <Export onClose={() => setExportAnchorEl(null)}/>
      </Menu>
    }
    {!!EditColumns &&
      <Menu
        open={Boolean(editColumnsAnchorEl)}
        anchorEl={editColumnsAnchorEl}
        onClose={() => setEditColumnsAnchorEl(null)}
        anchorOrigin={{
          vertical:   'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical:   'top',
          horizontal: 'right',
        }}
      >
        <EditColumns columns={columns} />
      </Menu>
    }
  </>
}

EnhancedList.defaultProps = {
  size: 'small',
}

export default EnhancedList
