/* eslint-disable max-lines */
import { pipe, groupBy } from './utils'

describe('pipe', () => {
  const multiply = x => y => y * x
  const add = x => y => y + x
  const pow = x => y => y ** x

  it('composes functions from left to right', () => {
    const doubleIncrementSquare = pipe(
      multiply(2),
      add(1),
      pow(2),
    )
    const squareIncrementDouble = pipe(
      pow(2),
      add(1),
      multiply(2),
    )
    expect(doubleIncrementSquare(5)).toBe(((5 * 2) + 1) ** 2) // 121
    expect(squareIncrementDouble(5)).toBe(((5 ** 2) + 1) * 2) // 52
  })

  it('enhances readability', () => {
    // operations will be performed in the order they appear in the pipe
    const doubleIncrementSquare = pipe(multiply(2), add(1), pow(2))

    // unlike here where you need to read from right to left
    const _doubleIncrementSquare = x => pow(2)(add(1)(multiply(2)(x)))

    expect(doubleIncrementSquare(5)).toEqual(_doubleIncrementSquare(5))
  })

  it('allows easy optimizations', () => {
    const inputs = [5, 10, 15, 20]

    expect(inputs.map(pipe( // map only once
      multiply(2),
      add(1),
      pow(2),
    ))).toEqual(inputs // instead of three times
      .map(multiply(2))
      .map(add(1))
      .map(pow(2)),
    )
  })
})

// eslint-disable-next-line max-lines-per-function
describe('groupBy', () => {
  const characters = [
    { darkSide: true, saberColor: 'red', name: 'Darth Vader' },
    { darkSide: false, saberColor: 'blue', name: 'Obi Wan' },
    { darkSide: false, saberColor: 'green', name: 'Yoda' },
    { darkSide: false, saberColor: 'blue', name: 'Luke Skywalker' },
    { darkSide: true, saberColor: 'red', name: 'Palpatin' },
    { darkSide: false, saberColor: 'purple', name: 'Windu' },
  ]

  const groupBySaberColor = groupBy('saberColor')
  const groupByAllegiance = groupBy('darkSide')

  it('groups objects by values of a given key', () => {
    const results = groupBySaberColor(characters)

    expect(results.green).toHaveLength(1)
    expect(results.blue).toHaveLength(2)
    expect(results.purple).toHaveLength(1)
    expect(results.red).toHaveLength(2)
    expect(results).toEqual({
      green: expect.arrayContaining([{ darkSide: false, saberColor: 'green', name: 'Yoda' }]),
      blue:  expect.arrayContaining([
        { darkSide: false, saberColor: 'blue', name: 'Luke Skywalker' },
        { darkSide: false, saberColor: 'blue', name: 'Obi Wan' },
      ]),
      purple: expect.arrayContaining([{ darkSide: false, saberColor: 'purple', name: 'Windu' }]),
      red:    expect.arrayContaining([
        { darkSide: true, saberColor: 'red', name: 'Palpatin' },
        { darkSide: true, saberColor: 'red', name: 'Darth Vader' },
      ]),
    })
  })

  it('can groups objects by boolean values', () => {
    const results = groupByAllegiance(characters)

    expect(results.true).toHaveLength(2)
    expect(results.false).toHaveLength(4)
    expect(results).toEqual({
      [true]: expect.arrayContaining([
        { darkSide: true, saberColor: 'red', name: 'Darth Vader' },
        { darkSide: true, saberColor: 'red', name: 'Palpatin' },
      ]),
      [false]: expect.arrayContaining([
        { darkSide: false, saberColor: 'green', name: 'Yoda' },
        { darkSide: false, saberColor: 'purple', name: 'Windu' },
        { darkSide: false, saberColor: 'blue', name: 'Obi Wan' },
        { darkSide: false, saberColor: 'blue', name: 'Luke Skywalker' },
      ]),
    })
  })
})
