export const part1 = ([departure, times]) => {
  const { id, timestamp } = times.split(',').filter(time => time !== 'x').reduce(({ timestamp, id }, time) => {
    const res = time - (departure % time)
    const isEarlier = res < timestamp
    return {
      timestamp: isEarlier ? res : timestamp,
      id: isEarlier ? time : id
    }
  }, { id: '', timestamp: departure })
  return id * timestamp
}

export const part2 = ([_, times]) => {
  return times
    .split(',')
    .map((time, offset) => ({ time, offset }))
    .filter(({ time }) => time !== 'x')
    .map(({ time, offset }) => ({ time: Number(time), offset }))
    .reduce(({ solution, multi }, { time, offset }) => {
      while (true) {
        if ((solution + offset) % time === 0) {
          multi *= time
          break
        }
        solution += multi
      }
      // console.log(solution, time, offset)
      return { solution, multi }
    }, { solution: 0, multi: 1 }).solution
}
