import React, { useState } from 'react'

import FlexBox from '../../Templates/FlexBox'

const computeNextKey = duplicated => {
  let nextKey = 0

  duplicated.map(duplicate => {
    const key = parseInt(duplicate.key)

    if ('key' in duplicate && key >= nextKey) {
      nextKey = key + 1
    }
  })

  return nextKey
}

const Duplicable = ({
  model,
  addType,
  removeType,
  canBeEmpty = false,
  instancesProps = [],
  gap = 1,
  mb = 1,
  btnMarginTop = 2,
}) => {
  const [duplicated, setDuplicated] = useState(
    instancesProps.length ? instancesProps.map((instanceProps, index) => {
      return React.cloneElement(model, { ...instanceProps, key: index })
    }) :
    canBeEmpty ? [] :
    [React.cloneElement(model, { key: 0 })],
  )

  const nextKey = computeNextKey(duplicated)

  const removeDuplicate = key => setDuplicated(
    duplicated.filter(
      duplicate => {
        if (!canBeEmpty && duplicated.length < 2) {
          return true
        }

        return duplicate.key !== key
      },
    ),
  )

  const clonedAdd = React.cloneElement(addType, {
    onClick: () => setDuplicated([...duplicated, React.cloneElement(model, { key: nextKey })]),
    ...addType.props,
  })

  return <>
    {
      duplicated.map(duplicate => {
        const clonedRemove = React.cloneElement(removeType, {
          onClick: () => { removeDuplicate(duplicate.key) },
          ...removeType.props,
        })

        return <FlexBox key={duplicate.key} alignItems="center" mb={mb} gap={gap}>
          {duplicate}
          {clonedRemove}
        </FlexBox>
      })
    }
    <FlexBox key="add_btn" mt={btnMarginTop}>
      {clonedAdd}
    </FlexBox>
  </>
}

export default Duplicable
