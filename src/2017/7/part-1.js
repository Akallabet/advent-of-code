const recursiveCircus = input => {
  const programs = input.split('\n').map(p => p.replace(/( \(\d*\))/, '').replace(/ ->/, ',').split(', '))
  const roots = programs.reduce((ret, p) => [p[0], ...ret], [])
  const nodes = programs.reduce((ret, p) => ret.concat(p.slice(1, p.length)), [])

  return roots.find(r => !nodes.find(n => n === r))
}

export default recursiveCircus
