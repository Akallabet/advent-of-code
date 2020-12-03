const run = rows => ([down, right]) => {
  let slope = 0
  let trees = 0
  for (let i = down; i < rows.length; i += down) {
    slope = slope + right
    if (!rows[i][slope]) slope = slope - rows[i].length
    if (rows[i][slope] === '#') trees++
  }
  return trees
}

export const part1 = rows => run(rows)([1, 3])

export const part2 = rows => {
  return [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]].reduce((trees, increment) => trees * run(rows)(increment), 1)
}
