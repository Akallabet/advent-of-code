const buildOrbitMap = planets => planets
  .reduce((orbitMap, orbit) => {
    const [planet, satellite] = orbit.split(')')
    if (!orbitMap.get(planet)) {
      orbitMap.set(planet, {
        satellites: []
      })
    }
    if (!orbitMap.get(satellite)) {
      orbitMap.set(satellite, { satellites: [] })
    }
    orbitMap.get(planet).satellites.push(satellite)
    return orbitMap
  }, new Map())

export const part1 = (inputValues) => {
  const orbitMap = buildOrbitMap(inputValues.split('\n'))
  let totalOrbits = 0
  let orbitDeep = 0
  const deepSearch = (planet) => {
    const { satellites } = orbitMap.get(planet)
    totalOrbits += orbitDeep
    if (!satellites.length) {
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

export const part2 = (inputValues) => {
  const orbitMap = buildOrbitMap(inputValues.split('\n'))
  const addParentPlanets = (planet, parent) => {
    const system = orbitMap.get(planet)
    if (!system) return
    system.parent = parent
    const { satellites } = system
    for (let i = 0; i < satellites.length; i++) {
      addParentPlanets(satellites[i], planet)
    }
  }

  const getParents = (planet, hops = 0, parents = new Map()) => {
    const { parent } = orbitMap.get(planet)
    if (!parent) {
      return parents
    }
    parents.set(planet, hops)
    return getParents(parent, hops + 1, parents)
  }

  addParentPlanets('COM')
  const youParents = getParents('YOU')
  const sanParents = getParents('SAN')
  let minHops = 0
  for (const parent of youParents.keys()) {
    const sanParent = sanParents.get(parent)
    if (sanParent) {
      const hops = sanParent + youParents.get(parent)
      minHops = (!minHops && hops) || (hops < minHops && hops) || minHops
    }
  }
  return minHops - 2
}
