import { pipe, groupBy } from './utils'

describe('pipe', () => {
  it('composes functions from left to right', () => {
    const multiply = x => y => y * x
    const add = x => y => y + x
    const pow = x => y => y ** x

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
