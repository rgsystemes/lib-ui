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
  if (instancesProps.length === 0 && !canBeEmpty) {
    instancesProps.push({})
  }

  const [duplicated, setDuplicated] = useState(
    instancesProps.map(
      (instanceProps, index) => React.cloneElement(model, { ...instanceProps, key: index, index }),
    ),
  )

  const nextKey = computeNextKey(duplicated)

  const removeDuplicate = key => setDuplicated(
    duplicated
      .filter(duplicate => (!canBeEmpty && duplicated.length < 2) || duplicate.key !== key)
      .map((filtered, index) => ({ ...filtered, index })),
  )

  return <>
    {
      duplicated.map(duplicate => {
        return React.cloneElement(duplicate, { ...duplicate, onRemove: () => removeDuplicate(duplicate.key) })
      })
    }
    {
      addType({
        onAdd: () => setDuplicated(
          [
            ...duplicated,
            React.cloneElement(model, { key: nextKey, index: duplicated.length }),
          ],
        ),
      })
    }
  </>
}

export default Duplicable
