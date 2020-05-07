import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import Paper from '@material-ui/core/Paper'
import { Download } from 'styled-icons/boxicons-regular/Download'
import { Columns } from 'styled-icons/boxicons-regular/Columns'
import { Search } from 'styled-icons/material/Search'
import { Plus } from 'styled-icons/boxicons-regular/Plus'
import { Trash } from 'styled-icons/boxicons-solid/Trash'

import Typo from '../../Atoms/Typo'
import Trans, { useTranslation } from '../../Atoms/Trans'
import BasePagination from '../../Molecules/Pagination'
import BaseExport from '../../Molecules/Export'
import { constants as filterConstants } from '../../Molecules/Filter'
import BaseEditColumns from './EditColumns'
import Popover from '../../Atoms/Popover'
import Tooltip from '../../Atoms/Tooltip'
import ButtonGroup from '../../Atoms/ButtonGroup'
import Icon from '../../Atoms/Icon'
import Input from '../../Atoms/Input'
import InputAdornment from '../../Atoms/Input/InputAdornment'

import TableList from '../../Molecules/TableList'
const { EMPTY_VALUES } = filterConstants

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

const Clear = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${css({ px: 'm' })};
`

const isFiltered = (filter, column) => (
  filter != null &&
  filter !== '' &&
  filter !== EMPTY_VALUES[column.type]
)

const ClearFilters = ({ filters = {}, onClear = () => {}, columns = [] }) =>
  columns.some(column => isFiltered(filters[column.name], column)) &&
  <Clear onClick={() => onClear({})}>
    <Icon Component={Trash} size="small"/>
    <Typo color="grey">
      <Trans>global.filter.clearCurrent</Trans>
    </Typo>
  </Clear>

const EnhancedList = ({
  onSearch = null,
  onAdd = null,
  onExport = () => {},
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
  const [exportValue, setExportValue] = useState()
  const t = useTranslation()
  const { filters, onFilter } = props

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
      <ClearFilters filters={filters} onClear={onFilter} columns={columns} />
      <div>
        <ActionGroup size="small">
          {onAdd != null &&
            <Tooltip title={t('global.action.add')}>
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
        {actions.map((actionGroup, i) =>
          <ActionGroup size="small" key={`action-${i}`}>
            {actionGroup}
          </ActionGroup>,
        )}
      </div>
    </Toolbar>
    <View columns={columns.filter(({ show }) => show)} {...props}/>
    {!!Export &&
      <Popover
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
        <Export
          value={exportValue}
          onChange={newValue => setExportValue({ ...exportValue, ...newValue })}
          onClose={() => setExportAnchorEl(null)}
          onExport={data => {
            setExportAnchorEl(null)
            onExport(data)
          }}
        />
      </Popover>
    }
    {!!EditColumns &&
      <Popover
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
      </Popover>
    }
  </>
}

EnhancedList.defaultProps = {
  size: 'small',
}

export default EnhancedList
