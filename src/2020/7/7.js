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

export const part1 = values => {
  const totalColors = colorsContainingBag(values, [])('shiny gold')
  return Object.keys(totalColors).length
}

export const part2 = values => {}
