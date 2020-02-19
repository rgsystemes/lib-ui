import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import BaseTableBody from '@material-ui/core/TableBody'

import Typo from '../../Atoms/Typo'
import Trans from '../../Atoms/Trans'
import TableCell from './TableCell'
import BaseColumn from './SortedColumn'
import Row from './Row'
import Table from './Table'

const TableBody = styled(BaseTableBody)`
  ${css({ bg: 'secondary' })};
`

const Head = styled(TableHead)`
  ${css({ borderBottomColor: 'lightgrey' })};
  border-bottom-width: 2px;
  border-bottom-style: solid;
`

const Wrapper = styled.div`
  position: relative;
  overflow-x: auto;
`

const NoResults = styled(Typo)`
  ${css({ p: 'm' })};
`

export const TableList = ({
  data = [],
  onSort = null,
  filters = {},
  onFilter = () => {},
  onSelect = () => {},
  Details = () => null,
  selected,
  columns = [],
  sort,
  way,
  Cell = ({ children }) => <TableCell children={children || '-'} />,
  Column = BaseColumn,
  ...props
}) => (
  <Wrapper>
    <Table {...props}>
      <Head>
        <TableRow>
          { columns.map(({ name, translationKey, ...column }) => (
            <Column
              key={name}
              onSort={onSort}
              sort={sort === name && way}
              filter={filters[name]}
              onFilter={value => onFilter({ ...filters, [name]: value })}
              onClear={defaultValue => onFilter({ ...filters, [name]: defaultValue })}
              name={name}
              translationKey={translationKey}
              {...column}
            >
              <Trans transKey={translationKey} />
            </Column>
          )) }
        </TableRow>
      </Head>
      <TableBody>
        { data.length === 0 ? (
          <Row hover={false}>
            <TableCell colSpan={columns.length}>
              <NoResults>
                <Trans>global.no_results</Trans>
              </NoResults>
            </TableCell>
          </Row>
        ) :
          data.map(item => (
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
  </Wrapper>
)

export default TableList
