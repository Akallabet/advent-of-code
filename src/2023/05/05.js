function isSourceInRange ({ sourceRangeStart, rangeLength, value }) {
  return sourceRangeStart <= value && value <= sourceRangeStart + rangeLength - 1
}

function mapSourceToDestination ({ source, destination, value }) {
  return value + (destination - source)
}

export function giveASeedAFertilizer (input) {
  const [seedsLine, ...rest] = input.split('\n')
  const seeds = seedsLine.split(' ').slice(1).map(Number)
  const rangeMapList = rest.slice(1).filter(line => !line.endsWith(':')).reduce((maps, line) => {
    if (line === '') {
      maps.push([])
    } else {
      maps[maps.length - 1].push(line)
    }
    return maps
  }, [[]]).map((rangeMap) => rangeMap.map(line => line.split(' ').map(Number)))

  const mappedValues = rangeMapList.reduce((list, rangeMaps) => {
    return list.map(value => {
      const rangeMap = rangeMaps.find(([_destinationRangeStart, sourceRangeStart, rangeLength]) => isSourceInRange({ sourceRangeStart, rangeLength, value }))
      if (rangeMap) {
        const [destination, source] = rangeMap
        // console.log(value, rangeMap)
        return mapSourceToDestination({ source, destination, value })
      }
      return value
    })
  }, seeds)

  return mappedValues.reduce((min, val) => Math.min(min, val), Infinity)
}
