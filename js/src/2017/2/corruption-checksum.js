function corruptionChecksum (matrix, checksum) {
  return matrix.split('\n').reduce((total, row) => total + checksum(row.split(/[ \t]/).sort((a, b) => a - b).map(a => parseInt(a))), 0)
}

const part1 = matrix => corruptionChecksum(matrix, sorted => (sorted[sorted.length - 1] - sorted[0]))
const part2 = matrix => corruptionChecksum(matrix, sorted => {
  return sorted
    .reduce((checksum, a, idx) =>
      checksum +
        sorted.slice(idx, sorted.length)
          .reduce((res, b) => (b % a === 0 && b !== a) ? b / a : res, 0), 0)
})

export {
  part1, part2
}
