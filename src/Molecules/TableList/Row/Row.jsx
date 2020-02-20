import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import AnimateHeight from 'react-animate-height'
import BaseTableRow from '@material-ui/core/TableRow'

import TableCell from '../TableCell'

const TableRow = styled(BaseTableRow)`
  cursor: ${({ details }) => details ? 'pointer' : 'auto'};

  border-left: 3px solid transparent;
  ${({ selected }) => css({ borderLeftColor: selected ? 'primary' : 'transparent' })}};

  &&.MuiTableRow-hover:hover {
    ${css({ borderLeftColor: 'primary', bg: 'lightgray' })}};
  }

  display: block;
  white-space: nowrap;
`

const Details = styled.div`
`

const DetailsCell = styled(TableCell)`
  &&.MuiTableCell-root {
    padding 0;
    border: 0;

    ${Details} {
      ${css({ p: 'm' })};
    }
  }
`

const Row = ({
  children,
  id,
  selected = false,
  cols,
  details,
  onSelect = () => {},
  hover = true,
  ...props
}) => <>
  <TableRow
    details={details}
    selected={selected}
    onClick={() => onSelect(selected ? null : id)}
    hover={hover}
    {...props}
  >
    { children }
  </TableRow>
  { !!details &&
    <TableRow selected={selected}>
      <DetailsCell colSpan={ cols }>
        <AnimateHeight height={selected ? 'auto' : 0}>
          <Details>
            { details }
          </Details>
        </AnimateHeight>
      </DetailsCell>
    </TableRow>
  }
</>

export default Row
