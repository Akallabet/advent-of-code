function isSourceInRange ({ sourceRangeStart, rangeLength, value }) {
  return sourceRangeStart <= value && value <= sourceRangeStart + rangeLength - 1
}

function mapSourceToDestination ({ source, destination, value }) {
  return value + (destination - source)
}

function calcRangeMapList (lines) {
  return lines.slice(1).filter(line => !line.endsWith(':')).reduce((maps, line) => {
    if (line === '') {
      maps.push([])
    } else {
      maps[maps.length - 1].push(line)
    }
    return maps
  }, [[]]).map((rangeMap) => rangeMap.map(line => line.split(' ').map(Number)))
}

function mapValueToRange (value, rangeMaps) {
  const rangeMap = rangeMaps.find(([_destinationRangeStart, sourceRangeStart, rangeLength]) => isSourceInRange({ sourceRangeStart, rangeLength, value }))
  if (rangeMap) {
    const [destination, source] = rangeMap
    const mapped = mapSourceToDestination({ source, destination, value })
    return mapped
  }
  return value
}

export function giveASeedAFertilizer (input) {
  const [seedsLine, ...rest] = input.split('\n')
  const seeds = seedsLine.split(' ').slice(1).map(Number)
  const rangeMapList = calcRangeMapList(rest)
  return seeds
    // .map(seed => mapSeedToLocation(seed, rangeMapList))
    .map(seed => {
      // console.log('seed', seed)
      return rangeMapList.reduce(mapValueToRange, seed)
    })
    .reduce((min, val) => Math.min(min, val), Infinity)
}

export function giveASeedAFertilizerPart2 (input) {
  const [seedsLine, ...rest] = input.split('\n')
  const rangeMapList = calcRangeMapList(rest).map(rangeMap => rangeMap.sort((a, b) => a[1] - b[1]))
  const seedRanges = seedsLine.split(' ').slice(1).map(Number).reduce((ranges, seed) => {
    if (ranges[ranges.length - 1].length === 2) {
      ranges.push([seed])
    } else {
      ranges[ranges.length - 1].push(seed)
    }
    return ranges
  }, [[]])


  return seedRanges.map(([start, length])=> [start, start+ length-1]).sort((a,b) => a[0] - b[0])
  // for (const [start, length] of seedRanges) {
  //   const end = start + length - 1
  //   for (let seed = start; seed <= end; seed++) {
  //     console.log(seed)
  //   }
  // }
  // console.log('DONE')
  //
  // return ''
  // let lowestLocationNumber = Infinity
  // for (const [start, length] of seedRanges) {
  //   const end = start + length - 1
  //   for (let seed = start; seed <= end; seed++) {
  //     // const location = mapSeedToLocation(seed, rangeMapList)
  //     const location = rangeMapList.reduce(mapValueToRange, seed)
  //     lowestLocationNumber = Math.min(lowestLocationNumber, location)
  //   }
  // }
  // return lowestLocationNumber
}
