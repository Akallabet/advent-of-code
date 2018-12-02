const parseToInt = f => parseInt(f)

const part1 = frequencies => frequencies.map(parseToInt).reduce((tot,f) => tot + f, 0)

const part2 = frequencies => {
  const foundFrequencies = {}
  let found = false
  let actualFrequency = 0

  while (!found) {
    frequencies.map(parseToInt)
      .forEach(f => {
        if (foundFrequencies[actualFrequency]) {
          found = actualFrequency
        }
        else {
          foundFrequencies[actualFrequency] = actualFrequency
          actualFrequency = actualFrequency + f
        }
      })
  }
  return actualFrequency
}

module.exports = {
  part1,
  part2
}
