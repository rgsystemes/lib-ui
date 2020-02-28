import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import Popover from '@material-ui/core/Popover'

import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt'
import { UpArrowAlt } from 'styled-icons/boxicons-regular/UpArrowAlt'

import { Filter as BaseFilterIcon } from 'styled-icons/boxicons-regular/Filter'

import BaseFilter, { constants as filterConstants } from '../../../Molecules/Filter'
import BaseTableCell from '../TableCell'
import Typo from '../../../Atoms/Typo'
import Icon from '../../../Atoms/Icon'

const DESC = 0
const ASC = 1
const NONE = 2

const TableCell = styled(BaseTableCell)`
  &.MuiTableCell-head {
    padding-bottom: 0;
  }
`

const IconWrapper = styled(Icon)`
  display: flex;
  opacity: ${({ filtered }) => filtered ? '1' : '0'};
  ${css({ color: 'primary' })};

  ${TableCell}:hover &  {
    opacity: ${({ disabled }) => disabled ? '0' : '1'};
  }
`

const Column = styled(Typo)`
  cursor: ${({ disableSort }) => disableSort ? 'auto' : 'pointer'};
  ${css({ color: 'primary' })};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  align-items: center;
`

const SortIcon = styled.span`
  ${css({ ml: 's' })};
  opacity: ${({ currentSort }) => currentSort ? '1' : '0'};
  & > svg {
    display: block;
  }

  ${CellWrapper}:hover & {
    opacity: 1;
  }
`

const switchOrder = (name, order, onSort) => {
  order = (order + 1) % 3
  onSort(
    order === NONE ? null   : name,
    order === NONE ? null   :
    order === DESC ? 'desc' :
    'asc',
  )
}

const computeOrder = sort => (
  sort === 'desc' ? DESC :
  sort === 'asc'  ? ASC :
  NONE
)
const { EMPTY_VALUES } = filterConstants
const SortedColumn = ({
  children,
  name,
  translationKey,
  type,
  options,
  placeholder,
  onSort = null,
  sort,
  onFilter = () => {},
  Filter = BaseFilter,
  filter,
}) => {
  const order = computeOrder(sort)
  const [filterAnchorEl, setFilterAnchorEl] = useState(null)
  const filtered = filter != null && filter !== '' && filter !== EMPTY_VALUES[type]

  return (
    <TableCell>
      <Popover
        open={Boolean(filterAnchorEl)}
        onClose={() => setFilterAnchorEl(null)}
        anchorEl={filterAnchorEl}
      >
        <Filter onClear={() => {
          setFilterAnchorEl(null)
          onFilter(type in EMPTY_VALUES ? EMPTY_VALUES[type] : '')
        }}
        onChange={onFilter}
        placeholder={placeholder}
        value={filter}
        name={name}
        type={type}
        options={options}
        translationKey={translationKey}
        />
      </Popover>
      <CellWrapper>
        <Column
          as="strong"
          onClick={ () => !!onSort && switchOrder(name, order, onSort) }
          disableSort={!onSort}
        >
          {children}
          {!!onSort &&
            <SortIcon data-testid={`sort-column-${name}`} size="small" currentSort={!!sort}>
              {order === 1 ? <UpArrowAlt size={16} /> : <DownArrowAlt size={16} />}
            </SortIcon>
          }
        </Column>
        <IconWrapper
          data-testid={`filter-column-${name}`}
          disabled={!type}
          Component={BaseFilterIcon}
          onClick={event => setFilterAnchorEl(event.currentTarget)}
          size="small"
          filtered={filtered}
        />
      </CellWrapper>
    </TableCell>
  )
}

export default SortedColumn
