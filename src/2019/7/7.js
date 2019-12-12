import intCode from '../intCode'

const calcPermutations = (phases, n = 0, permutations = []) => {
  if (n === phases.length - 1) {
    permutations.push(phases)
  } else {
    // console.log(phases, n)
    calcPermutations(phases, n + 1, permutations)
    for (let i = n; i < phases.length - 1; i++) {
      const initial = phases.slice(0, n)
      const last = phases[i]
      const middle = phases.slice(i + 1)
      // const el = [
      //   ...initial,
      //   ...middle,
      //   last
      // ]
      console.log(phases, `Current index ${n}`, `i => ${i}`)
      console.log(initial, middle, last)
      // calcPermutations(
      //   el,
      //   n + 1,
      //   permutations
      // )
    }
  }
  return permutations
}

export const part1 = (inputValues) => {
  const program = inputValues.split(',').map(i => parseInt(i))
  const phaseSettings = calcPermutations([1, 2, 3, 4])

  console.log(phaseSettings)
  // return Math.max(...phaseSettings.map(phaseSetting => phaseSetting.reduce((input, phase) => {
  //   return intCode({ program, input: [input, phase] })
  // }, 0)))
}
