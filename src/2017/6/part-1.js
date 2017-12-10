const MemoryReallocation = input => {
  const getIdxWithMostBlocks = () => mBanks.indexOf(mBanks.reduce((a, b) => Math.max(a, b)))
  const getIdx = idx => idx === mBanks.length - 1 ? 0 : idx + 1

  const configurations = []
  const mBanks = input.split(',').map(n => parseInt(n))
  let dupConfigFound = false
  let cycles = 0

  while (!dupConfigFound) {
    const idxWithMostBlocks = getIdxWithMostBlocks(mBanks)
    let blocks = mBanks[idxWithMostBlocks]
    mBanks[idxWithMostBlocks] = 0
    let idx = getIdx(idxWithMostBlocks)

    for (let i = 0; i < blocks; i++) {
      mBanks[idx]++
      idx = getIdx(idx)
    }
    const configuration = mBanks.join(',')

    dupConfigFound = configurations.find(conf => conf === configuration)
    configurations.push(configuration)
    cycles++
  }

  return cycles
}

export default MemoryReallocation
