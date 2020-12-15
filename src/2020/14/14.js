export const part1 = (instructions) => {
  let mask
  const memory = [...new Array(65)].map(n => 0)

  instructions.forEach((str) => {
    if (str.indexOf('mask = ') === 0) {
      mask = str.replace('mask = ', '')
    } else {
      const [memoryString, value] = str.split(' = ')
      const address = memoryString.replace('mem[', '').replace(']', '')
      const bitValue = Number(value).toString(2)
      const emptyMask = mask.slice(0, mask.length - bitValue.length)
      const fullMask = mask.slice(mask.length - bitValue.length)
      let bitToWrite = emptyMask.split('').map(x => x !== 'X' ? x : 0).join('')
      for (let i = 0; i < bitValue.length; i++) {
        const choice = fullMask[i] !== 'X' ? fullMask[i] : bitValue[i] ? bitValue[i] : 0
        bitToWrite = `${bitToWrite}${choice}`
      }
      memory[address] = parseInt(bitToWrite, 2)
    }
  })
  return memory.reduce((total, m) => total + m, 0)
}

export const part2 = (instructions) => {
  // let mask
  // const memory = [...new Array(65)].map(n => 0)

  // instructions.forEach((str) => {
  //   if (str.indexOf('mask = ') === 0) {
  //     mask = str.replace('mask = ', '')
  //   } else {
  //     const [memoryString, value] = str.split(' = ')
  //     const address = memoryString.replace('mem[', '').replace(']', '')
  //     const bitValue = Number(value).toString(2)
  //     const emptyMask = mask.slice(0, mask.length - bitValue.length)
  //     const fullMask = mask.slice(mask.length - bitValue.length)
  //     let bitToWrite = emptyMask.split('').map(x => x !== 'X' ? x : 0).join('')
  //     for (let i = 0; i < bitValue.length; i++) {
  //       const choice = fullMask[i] === 'X' ? fullMask[i] : bitValue[i] ? bitValue[i] : fullMask[i]
  //       bitToWrite = `${bitToWrite}${choice}`
  //     }
  //     console.log({
  //       mask,
  //       value,
  //       bitToWrite
  //     })
  //   }
  // })
}
