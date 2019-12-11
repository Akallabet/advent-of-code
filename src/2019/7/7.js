import intCode from '../intCode'

const createPhaseSettingsCombinations = () => {
  const phases = [0, 1, 2, 3, 4]
  const permutations = []

  phases.forEach(n => {
    for (let i = n; i < phases.length - 1; i++) {
      const el = phases.shift(n)
      phases.push(el)
      permutations.push([...phases])
      // newPermutations.push([
      //   ...phases.slice(0, 0),
      //   ...phases.slice(i + 1, phases.length),
      //   phases[i]
      // ])
    }

    // return [...permutations, ...newPermutations]
  })

  console.log(permutations)
}

export const part1 = (inputValues) => {
  const program = inputValues.split(',').map(i => parseInt(i))
  const phaseSettings = createPhaseSettingsCombinations()

  // console.log(phaseSettings)

  // return Math.max(...phaseSettings.map(phaseSetting => phaseSetting.reduce((input, phase) => {
  //   return intCode({ program, input: [input, phase] })
  // }, 0)))
}
