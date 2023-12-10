export function diffs (list = [0]) {
  const diffs = []
  for (let i = 0; i < list.length - 1; i++) {
    diffs.push(list[i + 1] - list[i])
  }
  return diffs
}

export function diffListToZero (list = [0], listOfDiffs = []) {
  const newDiff = diffs(list)
  if (newDiff[newDiff.length - 1] === 0) return listOfDiffs
  listOfDiffs.push(diffs(list))
  return diffListToZero(newDiff, listOfDiffs)
}

export function calcNextValue (list = [0]) {
  const listOfDiffs = diffListToZero(list, [list])

  return listOfDiffs.reduce((value, diff) => {
    return value + diff[diff.length - 1]
  }, 0)
}
export function mirageMaintenance (input) {
  const lines = input.split('\n').filter(Boolean).map(line => line.split(' ').map(Number)).map(calcNextValue)

  return lines.reduce((acc, line) => acc + line, 0)
}
