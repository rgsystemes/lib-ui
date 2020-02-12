import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt'
import { UpArrowAlt } from 'styled-icons/boxicons-regular/UpArrowAlt'

import { Filter as BaseFilterIcon } from 'styled-icons/boxicons-regular/Filter'

import TableCell from '../TableCell'
import Menu from '../../../Atoms/Menu'
import Typo from '../../../Atoms/Typo'

const DESC = 0
const ASC = 1
const NONE = 2

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

const SortedColumn = ({
  children,
  name,
  onSort = null,
  sort,
  onFilter = null,
  Filter = () => null,
}) => {
  const order = computeOrder(sort)
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
          onClick={ () => !(onSort == null) && switchOrder(name, order, onSort) }
          disableSort={onSort == null}
        >
          {children}
          {!(onSort == null) &&
            <SortIcon data-testid={`sort-column-${name}`} size="small" currentSort={!!sort}>
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
