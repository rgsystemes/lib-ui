import React, { useState } from 'react'
import ButtonNoBorder from '../../Atoms/ButtonNoBorder'
import FlexBox from '../../Templates/FlexBox'
import { TrashAlt } from 'styled-icons/boxicons-solid/TrashAlt'

const Duplicable = ({
  Model,
  addText,
  requireContent = false,
  instancesCount = requireContent ? 1 : 0,
  onRemove = () => {},
  onAdd = () => {},
}) => {
  const [{ lastIndex, indices }, setState] = useState({
    lastIndex: instancesCount - 1,
    indices:   [...Array(instancesCount).keys()],
  })

  const addDuplicata = () => {
    setState({
      lastIndex: lastIndex + 1,
      indices:   [
        ...indices,
        lastIndex + 1,
      ],
    })
    onAdd(lastIndex + 1)
  }

  const removeDuplicata = key => {
    if (!requireContent || indices.length > 1) {
      setState({
        lastIndex: lastIndex,
        indices:   indices.filter(index => index !== key),
      })
      onRemove(key)
    }
  }

  return <>
    {
      indices.map(index => <FlexBox alignItems="center" mb={1} gap={1} key={index}>
        <Model index={index} />
        {
          (!requireContent || indices.length > 1) &&
          <FlexBox
            component={TrashAlt}
            size={24}
            cursor="pointer"
            onClick={() => removeDuplicata(index)}
            data-testid="InputRemover"
          />
        }
      </FlexBox>)
    }
    <FlexBox key="add_btn" mt={2}>
      <ButtonNoBorder onClick={addDuplicata}>{addText}</ButtonNoBorder>
    </FlexBox>
  </>
}

export default Duplicable
