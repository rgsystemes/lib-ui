import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import Popover from '@material-ui/core/Popover'

import { DownArrowAlt } from 'styled-icons/boxicons-regular/DownArrowAlt'
import { UpArrowAlt } from 'styled-icons/boxicons-regular/UpArrowAlt'

import { Filter as BaseFilterIcon } from 'styled-icons/boxicons-regular/Filter'

import BaseFilter from '../../../Molecules/Filter'
import TableCell from '../TableCell'
import Typo from '../../../Atoms/Typo'
import Icon from '../../../Atoms/Icon'

const DESC = 0
const ASC = 1
const NONE = 2

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

const SortedColumn = ({
  children,
  name,
  translationKey,
  type,
  options,
  placeholder,
  onSort = null,
  sort,
  onClear = () => {},
  onFilter = () => {},
  Filter = BaseFilter,
  filter,
}) => {
  const order = computeOrder(sort)
  const [filterAnchorEl, setFilterAnchorEl] = useState(null)

  return (
    <TableCell>
      <Popover
        open={Boolean(filterAnchorEl)}
        onClose={() => setFilterAnchorEl(null)}
        anchorEl={filterAnchorEl}
      >
        <Filter onClear={() => {
          setFilterAnchorEl(null)
          onClear(name)
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
        <IconWrapper
          data-testid={`filter-column-${name}`}
          disabled={!type}
          Component={BaseFilterIcon}
          onClick={event => setFilterAnchorEl(event.currentTarget)}
          size="small"
          filtered={filter != null && filter !== ''}
        />
      </CellWrapper>
    </TableCell>
  )
}

export default SortedColumn
