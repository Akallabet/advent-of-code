export const part1 = values => {
  const colorsContainingBag = (bags, colors = {}) => bag => {
    bags
      .filter(line => line.indexOf(bag) > 0)
      .map(line => {
        const [color] = line.split(' bags contain ')
        colors[color] = 1
        return color
      })
      .forEach(colorsContainingBag(bags, colors))
    return colors
  }

  const totalColors = colorsContainingBag(values, [])('shiny gold')
  return Object.keys(totalColors).length
}

export const part2 = values => {
  let total = 0
  const bagsContained = (bags, bag, multiplier) => {
    const line = bags.find(row => row.indexOf(`${bag} bags contain `) === 0)
    total += multiplier
    if (!line.includes('no other bags')) {
      const bagLines = line.replace(`${bag} bags contain `, '').replace('.', '').split(', ')
      bagLines.forEach(bagLine => {
        const [amount, adjective, color] = bagLine.split(' ')
        bagsContained(bags, `${adjective} ${color}`, multiplier * Number(amount))
      })
    }
  }

  bagsContained(values, 'shiny gold', 1)
  return total - 1
}
