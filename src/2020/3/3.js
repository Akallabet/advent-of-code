export const part1 = slopes => {
  let right = 0
  return slopes.slice(1, slopes.length).reduce((trees, slope) => {
    const turn = right + 3
    right = turn >= slope.length ? turn - slope.length : turn
    return slope[right] === '#' ? trees + 1 : trees
  }, 0)
}
