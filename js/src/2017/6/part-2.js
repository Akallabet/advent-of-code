const MemoryReallocation = input => {
  const getIdxWithMostBlocks = () => mBanks.indexOf(mBanks.reduce((a, b) => Math.max(a, b)))
  const getIdx = idx => idx === mBanks.length - 1 ? 0 : idx + 1

  const configurations = []
  const mBanks = input.split(',').map(n => parseInt(n))
  let dupConfigIdx = -1

  while (dupConfigIdx < 0) {
    const idxWithMostBlocks = getIdxWithMostBlocks(mBanks)
    let blocks = mBanks[idxWithMostBlocks]
    mBanks[idxWithMostBlocks] = 0
    let idx = getIdx(idxWithMostBlocks)

    for (let i = 0; i < blocks; i++) {
      mBanks[idx]++
      idx = getIdx(idx)
    }
    const configuration = mBanks.join(',')

    dupConfigIdx = configurations.indexOf(configuration)
    configurations.push(configuration)
  }

  return (configurations.length - 1) - dupConfigIdx
}

export default MemoryReallocation
