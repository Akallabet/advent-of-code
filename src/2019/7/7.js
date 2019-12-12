import intCode from '../intCode'

const createPhaseSettingsCombinations = (n = 0, phases = [0, 1, 2, 3, 4], permutations = []) => {
  // const permutations = []
  if (n === phases.length) return permutations
  const moving = phases.slice(1)
  // console.log(phases, moving)
  for (let i = 0; i < moving.length; i++) {
    permutations.push([phases[0], ...moving])
    // const el = [
    //   phases[0],
    //   ...moving.slice(i + 1, phases.length),
    //   moving[i]
    // ]
    const el = moving.shift()
    moving.push(el)
    // permutations.push([phases[0], ...moving])
    // console.log(el)
  }

  return createPhaseSettingsCombinations(
    n + 1,
    [...phases.slice(1, phases.length), phases[0]],
    permutations
  )

  // console.log(permutations)
}

export const part1 = (inputValues) => {
  const program = inputValues.split(',').map(i => parseInt(i))
  const phaseSettings = createPhaseSettingsCombinations()

  console.log(phaseSettings)

  // return Math.max(...phaseSettings.map(phaseSetting => phaseSetting.reduce((input, phase) => {
  //   return intCode({ program, input: [input, phase] })
  // }, 0)))
}
