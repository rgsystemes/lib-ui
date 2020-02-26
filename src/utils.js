export const pipe = (...fns) => fns.reduce((f, g) => x => g(f(x)))

export const groupBy = key => arrayOfObjects => arrayOfObjects.reduce(
  (groups, obj) => Object.assign(groups, {
    [obj[key]]: [...(groups[obj[key]] || []), obj],
  }),
  {},
)
