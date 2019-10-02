import React from 'react'
import styled from 'styled-components'
import { Button } from '../../Atoms'
import { border } from 'styled-system'

const Container = styled.div`
  display:  inline-block;
  border:   1px solid;
  overflow: hidden;
  ${border}
`

const display = ({ from, to, total }) => `${from} - ${to} of ${total}`

const Pagination = ({
  onFirst, onPrevious, onNext,
  Display = display,
  currentPage = 1,
  size = 0,
  total = 0,
}) => (
  <Container borderRadius='1' borderColor='midgray'>
    <Button
      onClick={onFirst}
      border='0'
      borderRadius='0'
    >«</Button>
    <Button
      onClick={onPrevious}
      borderY='0'
      borderRight='0'
      borderRadius='0'
    >‹</Button>
    <Button
      borderY='0'
      borderRight='0'
      borderRadius='0'
      color='highlight'
    >
      <Display
        from={total === 0 ? '0' : `${((currentPage - 1) * size) + 1}`}
        to={size * currentPage > total ? `${total}` : `${currentPage * size}`}
        total={total}
      />
    </Button>
    <Button
      onClick={onNext}
      borderY='0'
      borderRight='0'
      borderRadius='0'
    >›</Button>
  </Container>
)

export default Pagination
