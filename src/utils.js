export const pipe = (...fns) => fns.reduce((f, g) => x => g(f(x)))

export const groupBy = key => arrayOfObjects => arrayOfObjects.reduce(
  (groups, obj) => Object.assign(groups, {
    [obj[key]]: [...(groups[obj[key]] || []), obj],
  }),
  {},
)

const areObjects = (...things) => things.reduce(
  (result, thing) => result && typeof thing === 'object',
  true,
)

export const deepMerge = (source, overrides = {}) => Object.entries(overrides).reduce(
  (source, [k, v]) => (
    source[k] === v          ? source : // nothing to override
    areObjects(source[k], v) ? { ...source, [k]: deepMerge(source[k], v) } : // go deeper
    { ...source, [k]: v } // simple override
  ),
  source,
)
