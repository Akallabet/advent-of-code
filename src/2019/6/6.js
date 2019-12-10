const buildOrbitMap = planets => planets
  .reduce((orbitMap, orbit) => {
    const [planet, satellite] = orbit.split(')')
    if (!orbitMap.get(planet)) orbitMap.set(planet, [])
    orbitMap.get(planet).push(satellite)
    return orbitMap
  }, new Map())

export const part1 = (inputValues) => {
  const orbitMap = buildOrbitMap(inputValues.split('\n'))
  let totalOrbits = 0
  let orbitDeep = 0

  const deepSearch = (planet) => {
    const satellites = orbitMap.get(planet)
    totalOrbits += orbitDeep
    if (!satellites) {
      orbitDeep--
      return
    }
    for (let i = 0; i < satellites.length; i++) {
      orbitDeep++
      deepSearch(satellites[i])
    }
    orbitDeep--
  }

  deepSearch('COM')
  return totalOrbits
}
