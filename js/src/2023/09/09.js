export function diffs (list = [0]) {
  const diffs = []
  for (let i = 0; i < list.length - 1; i++) {
    diffs.push(list[i + 1] - list[i])
  }
  return diffs
}

export function diffListToZero (list = [0], listOfDiffs = []) {
  const newDiff = diffs(list)
  if (newDiff.every(diff => diff === 0)) return listOfDiffs
  listOfDiffs.push(diffs(list))
  return diffListToZero(newDiff, listOfDiffs)
}

export function calcNextValue (list = [0]) {
  const listOfDiffs = diffListToZero(list, [list])

  return listOfDiffs.reduce((value, diff) => {
    return value + diff[diff.length - 1]
  }, 0)
}

export function calcPrevValue (list = [0]) {
  const listOfDiffs = diffListToZero(list, [list])

  // console.log(listOfDiffs)
  return listOfDiffs.reduceRight((value, diff) => {
    // console.log(value, diff[0])
    return diff[0] - value
  }, 0)
}

export function mirageMaintenance (input) {
  return input
    .split('\n')
    .filter(Boolean)
    .map(line => line.split(' ').map(Number))
    .map(calcNextValue)
    .reduce((acc, line) => acc + line, 0)
}

export function mirageMaintenancePart2 (input) {
  return input
    .split('\n')
    .filter(Boolean)
    .map(line => line.split(' ').map(Number))
    .map(calcPrevValue)
    .reduce((acc, line) => acc + line, 0)
}
