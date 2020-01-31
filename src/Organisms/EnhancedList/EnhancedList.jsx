import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import Paper from '@material-ui/core/Paper'
import { Download } from 'styled-icons/boxicons-regular/Download'
import { Columns } from 'styled-icons/boxicons-regular/Columns'
import { Search } from 'styled-icons/material/Search'
import { Plus } from 'styled-icons/boxicons-regular/Plus'

import { useTranslation } from '../../Atoms/Trans'
import Pagination from '../../Molecules/Pagination'
import BaseExport from '../../Molecules/Export'
import BaseEditColumns from './EditColumns'
import Menu from '../../Atoms/Menu'
import Tooltip from '../../Atoms/Tooltip'
import ButtonGroup from '../../Atoms/ButtonGroup'
import IconButton from '../../Atoms/IconButton'
import Button from '../../Atoms/Button'
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

const SearchInput = styled(Input)`
  flex-grow: 1;
`

const ActionGroup = styled(ButtonGroup)`
  ${(css({ mx: 's' }))}
`

const EnhancedList = ({
  Export = BaseExport,
  ExportProps = {},
  EditColumns = BaseEditColumns,
  EditColumnsProps = {},
  onSearch = null,
  onAdd = null,
  columns,
  View = TableList,
  actions = [],
  PaginationProps = {},
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
        <Pagination {...PaginationProps}/>
        {onSearch != null &&
          <SearchInput
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            endAdornment={
              <InputAdornment>
                <IconButton data-testid="search-button" onClick={() => onSearch(searchTerm)}>
                  <Search size={18}/>
                </IconButton>
              </InputAdornment>
            }
            {...SearchInputProps}
          />
        }
      </SearchWrapper>
      <div>
        <ActionGroup>
          {onAdd != null &&
            <Tooltip title={t('global.add')}>
              <Button data-testid="add-button" onClick={onAdd}>
                <Plus size={16} />
              </Button>
            </Tooltip>
          }
        </ActionGroup>
        <ActionGroup>
          {!!Export &&
            <Tooltip title={t('global.export.title')}>
              <Button onClick={event => setExportAnchorEl(event.currentTarget)}>
                <Download size={16} />
              </Button>
            </Tooltip>
          }
          {!!EditColumns &&
            <Tooltip title={t('global.editColumns.title')}>
              <Button onClick={event => setEditColumnsAnchorEl(event.currentTarget)}>
                <Columns size={16} />
              </Button>
            </Tooltip>
          }
        </ActionGroup>
        {actions.map(actionGroup =>
          <ActionGroup>
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
      >
        <Export {...ExportProps} onClose={() => setExportAnchorEl(null)}/>
      </Menu>
    }
    {!!EditColumns &&
      <Menu
        open={Boolean(editColumnsAnchorEl)}
        anchorEl={editColumnsAnchorEl}
        onClose={() => setEditColumnsAnchorEl(null)}
      >
        <EditColumns columns={columns} {...EditColumnsProps}/>
      </Menu>
    }
  </>
}

EnhancedList.defaultProps = {
  size: 'small',
}

export default EnhancedList
