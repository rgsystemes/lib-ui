import React, { useState } from 'react'

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
  canBeEmpty = false,
  instancesProps = [],
}) => {
  const [duplicated, setDuplicated] = useState(
    instancesProps.length ? instancesProps.map((instanceProps, index) => {
      return React.cloneElement(model, { key: index, ...instanceProps, index: index })
    }) :
    canBeEmpty ? [] :
    [React.cloneElement(model, { key: 0, index: 0 })],
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
    ).map((filtered, index) => ({ ...filtered, index: index })),
  )

  const clonedAdd = React.cloneElement(addType, {
    onClick: () => setDuplicated([...duplicated, React.cloneElement(model, { key: nextKey, index: duplicated.length + 1 })]),
    ...addType.props,
  })

  return <>
    {
      duplicated.map(duplicate => {
        return React.cloneElement(duplicate, { onRemove: () => removeDuplicate(duplicate.key), ...duplicate })
      })
    }
    {clonedAdd}
  </>
}

export default Duplicable
