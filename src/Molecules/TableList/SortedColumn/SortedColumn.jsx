import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt'
import { UpArrowAlt } from 'styled-icons/boxicons-regular/UpArrowAlt'

import { Filter as BaseFilterIcon } from 'styled-icons/boxicons-regular/Filter'

import TableCell from '../TableCell'
import Menu from '../../../Atoms/Menu'
import Typo from '../../../Atoms/Typo'

const FilterIcon = styled(BaseFilterIcon)`
  display: flex;
  opacity: 0;
  cursor: pointer;
  ${css({ color: 'primary' })};

  ${TableCell}:hover &, &:focus, &:active {
    opacity: 1;
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
    order === 2 ? null : name,
    order === 2 ? null      :
    order === 0 ? 'desc'    :
    'asc'
  )
}

// order : 0 => DESC, 1 => ASC, 2 => NONE
const computeOrder = (current, sort, way) => (
  current === sort && way === 'desc' ? 0 :
  current === sort && way === 'asc'  ? 1 :
  2
)

const SortedColumn = ({
  children,
  name,
  onSort = null,
  sort,
  way,
  onFilter = null,
  Filter = () => null,
}) => {
  const order = computeOrder(name, sort, way)
  const [filterAnchorEl, setFilterAnchorEl] = useState(null)

  return (
    <TableCell>
      <Menu
        open={Boolean(filterAnchorEl)}
        onClose={() => setFilterAnchorEl(null)}
        anchorEl={filterAnchorEl}
      >
        <Filter />
      </Menu>
      <CellWrapper>
        <Column
          as="strong"
          data-testid={`column-${name}`}
          onClick={ () => !(onSort == null) && switchOrder(name, order, onSort) }
          disableSort={onSort == null}
        >
          {children}
          {!(onSort == null) &&
            <SortIcon data-testid={`sort-column-${name}`} size="small" currentSort={sort === name}>
              {[<DownArrowAlt size={16} />, <UpArrowAlt size={16} />, <DownArrowAlt size={16} />][order]}
            </SortIcon>
          }
        </Column>
        {!(onFilter == null) &&
          <FilterIcon data-testid={`filter-column-${name}`} size={20} onClick={event => setFilterAnchorEl(event.currentTarget)}/>
        }
      </CellWrapper>
    </TableCell>
  )
}

export default SortedColumn
