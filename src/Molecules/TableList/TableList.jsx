import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'

import TableCell from './TableCell'
import BaseColumn from './SortedColumn'
import Row from './Row'
import Table from './Table'

const Head = styled(TableHead)`
  ${css({ borderBottomColor: 'lightgrey' })};
  border-bottom-width: 2px;
  border-bottom-style: solid;
`

const Wrapper = styled.div`
  position: relative;
  overflow-x: auto;
`

export const TableList = ({
  data = [],
  onSort = null,
  onSelect = () => {},
  Details = () => null,
  selected,
  columns = [],
  sort,
  way,
  Cell = ({ children }) => <TableCell children={children || '-'} />,
  Column = BaseColumn,
  ColumnProps = {},
  emptyPlaceholder = null,
  ...props
}) => (
  data.length > 0 ? <Wrapper>
    <Table {...props}>
      <Head>
        <TableRow>
          { columns.map(({ name, translationKey }) => (
            <Column
              key={ name }
              onSort={ onSort }
              name={ name }
              sort={ sort }
              way={ way }
              {...ColumnProps}
            >
              {/* { $.rg('trans', translationKey) } */}
              {translationKey}
            </Column>
          )) }
        </TableRow>
      </Head>
      <TableBody>
        { data.map(item => (
          <Row
            key={item.id}
            id={item.id}
            selected={selected === item.id}
            cols={columns.length}
            onSelect={onSelect}
            details={<Details { ...item }/>}
          >
            { columns.map(({ name }) => (
              <Cell key={name} name={ name } item={ item }>
                {item[name]}
              </Cell>
            )) }
          </Row>
        )) }
      </TableBody>
    </Table>
  </Wrapper> :
  emptyPlaceholder
)

export default TableList
