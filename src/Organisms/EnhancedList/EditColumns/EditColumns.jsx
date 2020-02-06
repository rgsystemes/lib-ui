import React from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import Trans from '../../../Atoms/Trans'
import { Columns } from 'styled-icons/boxicons-regular/Columns'
import ColumnGroup from './ColumnGroup'

import Typo from '../../../Atoms/Typo'

const ColumnsIcon = styled(Columns)`
  ${css({ mr: 'm', color: 'primary' })}
`

const Container = styled.div`
  & > * {
    ${css({ px: 'l' })}
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const EditColumns = ({
  descriptionText = <Trans transKey="global.editColumns.description"/>,
  columns,
  onChange = () => {},
  ...props
}) => {
  const { enabledColumns, disabledColumns } = columns.reduce(
    (groups, column) => {
      groups[column.show ? 'enabledColumns' : 'disabledColumns'].push(column)
      return groups
    },
    { enabledColumns: [], disabledColumns: [] }
  )

  return <Container>
    <Title>
      <ColumnsIcon size={24} />
      <Typo as="h2" fontSize="title" fontFamily="title" color="primary">
        <Trans transKey="global.editColumns.title" />
      </Typo>
    </Title>
    <Typo as="div">{descriptionText}</Typo>
    {enabledColumns.length > 0 &&
      <ColumnGroup
        label={<Trans transKey="global.editColumns.enabledColumns"/>}
        columns={enabledColumns}
        onChange={name => onChange(name, false)}
        checked={true}
      />
    }
    {disabledColumns.length > 0 &&
      <ColumnGroup
        label={<Trans transKey="global.editColumns.disabledColumns"/>}
        columns={disabledColumns}
        onChange={name => onChange(name, true)}
        checked={false}
      />
    }
  </Container>
}
export default EditColumns
